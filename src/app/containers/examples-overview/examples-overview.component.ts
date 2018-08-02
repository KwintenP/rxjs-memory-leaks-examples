import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-overview',
  template: `
      <div class="content">
          <a [routerLink]="['/help-me-mr-meeseeks']">
              <img src="assets/img/mr_meeseeks.png" alt="mr meeseeks">
          </a>
          <a [routerLink]="['/help-me-multiple-times-mr-meeseeks']">
              <img src="assets/img/multiple_mr_meeseeks.jpg" alt="multiple mr meeseeks">
          </a>
          <a [routerLink]="['/finding-rxjs-memory-leaks']">
              <img src="assets/img/rick_and_morty.png" alt="rick and morty">
          </a>
      </div>
  `,
  styleUrls: ['./examples-overview.component.scss']
})
export class ExamplesOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
