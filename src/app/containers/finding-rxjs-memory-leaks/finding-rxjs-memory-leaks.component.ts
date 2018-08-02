import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EMPTY as empty, Observable } from 'rxjs';

@Component({
    selector: 'app-finding-rxjs-memory-leaks',
    template: `
        <mat-toolbar color="primary">
            <span>Where is the memory leak?</span>
            <span class="example-spacer"></span>
            <mat-icon class="example-icon">account_circle</mat-icon>
        </mat-toolbar>
        <div class="content">
            <form class="example-form">
                <mat-form-field class="example-full-width">
                    <input matInput placeholder="Name" aria-label="Name" [matAutocomplete]="auto" [formControl]="nameControl">
                    <mat-autocomplete #auto="matAutocomplete">
                        <mat-option *ngFor="let char of characters$ | async" [value]="char.name">
                            <img class="example-option-img" aria-hidden [src]="char.image" height="25">
                            <span>{{char.name}}</span>
                        </mat-option>
                    </mat-autocomplete>
                </mat-form-field>
            </form>
        </div>
    `,
    styleUrls: ['./finding-rxjs-memory-leaks.component.scss']
})
export class FindingRxjsMemoryLeaksComponent implements OnInit {
    nameControl = new FormControl();
    characters$: Observable<any>;

    constructor(private rickAndMortyService: RickAndMortyService) {
    }

    ngOnInit() {
        this.characters$ = this.nameControl.valueChanges
            .pipe(
                debounceTime(350),
                distinctUntilChanged(),
                switchMap(name => this.rickAndMortyService.searchRickAndMorty(name)
                    .pipe(
                        catchError(_ => empty)
                    )),
            );
    }

}
