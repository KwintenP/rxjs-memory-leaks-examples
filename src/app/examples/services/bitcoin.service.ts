import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  exhaust,
  exhaustMap,
  map,
  shareReplay,
  switchMap
} from 'rxjs/operators';
import { interval } from 'rxjs';

@Injectable()
export class BitcoinService {
  bitcoin$;

  constructor(private httpClient: HttpClient) {}

  getBitcoinPrice() {
    if (!this.bitcoin$) {
      this.bitcoin$ = interval(1000).pipe(
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
        shareReplay()
      );
    }
    return this.bitcoin$;
  }
}
