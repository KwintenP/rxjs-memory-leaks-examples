import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementAction, IncrementAction } from '../../state/count.reducer';

@Component({
    selector: 'app-store-subscribe',
    template: `
        <button mat-raised-button (click)="up()">Up</button>
        <button mat-raised-button (click)="down()">Down</button>
    `,
    styleUrls: ['./store-subscribe.component.css']
})
export class StoreSubscribeComponent implements OnInit {

    constructor(private store: Store<any>) {
    }

    ngOnInit() {
        this.store.select(state => state.count).subscribe(console.log);
    }

    up() {
        this.store.dispatch(new IncrementAction());
    }

    down() {
        this.store.dispatch(new DecrementAction());
    }
}
