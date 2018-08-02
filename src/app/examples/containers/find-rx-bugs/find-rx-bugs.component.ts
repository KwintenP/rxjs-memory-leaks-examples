import { Component, OnInit } from '@angular/core';
import { debounceTime, exhaustMap, map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find-rx-bugs',
  template: `
        Price is: {{bitcoin}}
    `
})
export class FindRxBugsComponent implements OnInit {
  bitcoin;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    interval(3000)
      .pipe(
        exhaustMap(_ =>
          this.httpClient.get<any>(
            `https://api.coindesk.com/v1/bpi/currentprice.json`
          )
        ),
        map(res => res.bpi.EUR.rate),
        map(rate => {
          const hugeArray = [];
          for (let i = 0; i < 250000; i++) {
            hugeArray.push(Math.ceil(Math.random() * 100));
          }
          return { rate, big: hugeArray };
        }),
        map(({ rate }) => rate),
        debounceTime(1000)
      )
      .subscribe(price => (this.bitcoin = price));
  }
}
