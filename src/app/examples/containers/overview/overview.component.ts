import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
        <a [routerLink]="['..', 'mr-meeseeks']">Mr Meeseeks</a>
    `,
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
