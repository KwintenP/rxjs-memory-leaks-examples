import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-mr-meeseeks',
    template: `
        <button mat-raised-button (click)="releaseMrMeeseeks()">Release Mr Meeseeks!</button>
        <img *ngFor="let mrMeeseeks of mrMeeseeksArray"
             src="assets/img/mr_meeseeks.png"
             [style.transform]="'rotate(' + mrMeeseeks.rotateDegree + 'deg)'">
    `
})
export class MrMeeseeksComponent implements OnInit {
    hugeArray = [];
    mrMeeseeksArray: Array<{ rotateDegree: number }> = [];

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {
        for (let i = 0; i < 250000; i++) {
            this.hugeArray.push(Math.ceil(Math.random() * 100));
        }
    }

    ngOnInit() {
        interval(1000)
            .pipe(map(_ => Math.floor(Math.random() * Math.floor(360))))
            .subscribe(degrees => {
                console.log({degrees});
                this.mrMeeseeksArray.push({rotateDegree: degrees});
            });
    }

    releaseMrMeeseeks() {
        this.router.navigate(['..', 'overview'], {relativeTo: this.activatedRoute});
    }
}
