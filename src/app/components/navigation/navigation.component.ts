import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-navigation',
    template: `
        <mat-sidenav-container class="sidenav-container">
            <mat-sidenav
                    #drawer
                    class="sidenav"
                    fixedInViewport="true"
                    [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
                    [mode]="(isHandset$ | async) ? 'over' : 'side'"
                    [opened]="!(isHandset$ | async)">
                <mat-toolbar color="primary">Menu</mat-toolbar>
                <mat-nav-list>
                    <a mat-list-item [routerLink]="['examples', 'create']">Create</a>
                    <a mat-list-item [routerLink]="['examples', 'custom-operator']">Custom operator</a>
                    <a mat-list-item [routerLink]="['examples', 'services-and-subjects']">Services and subjects</a>
                    <a mat-list-item [routerLink]="['examples', 'store-subscribe']">NGRX/store</a>
                    <a mat-list-item [routerLink]="['examples', 'unbounded-share-replay']">Unbounded shareReplay</a>
                    <a mat-list-item [routerLink]="['examples', 'no-mem-leaks']">No mem leaks</a>
                    <a mat-list-item href="#">Distinct over time</a>
                </mat-nav-list>
            </mat-sidenav>
            <mat-sidenav-content>
                <mat-toolbar color="primary">
                    <button
                            type="button"
                            aria-label="Toggle sidenav"
                            mat-icon-button
                            (click)="drawer.toggle()"
                            *ngIf="isHandset$ | async">
                        <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
                    </button>
                    <span>Application Title</span>
                </mat-toolbar>
                <router-outlet></router-outlet>
            </mat-sidenav-content>
        </mat-sidenav-container>
    `,
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }

}

