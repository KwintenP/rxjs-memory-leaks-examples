import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-observable-create',
    template: `
        {{interval$ | async}}
    `,
    styleUrls: ['./observable-create.component.css']
})
export class ObservableCreateComponent implements OnInit {
    interval$;
    hugeArray = [];

    constructor() {
        for (let i = 0; i < 250000; i++) {
            this.hugeArray.push(Math.ceil(Math.random() * 100));
        }
    }

    ngOnInit() {
        this.interval$ = Observable.create((observer) => {
            let counter = 0;
            observer.next(0);
            const intervalId = setInterval(() => {
                observer.next(++counter);
            }, 1000);

            // return () => {
            //     clearInterval(intervalId);
            // };
        });
    }

}
