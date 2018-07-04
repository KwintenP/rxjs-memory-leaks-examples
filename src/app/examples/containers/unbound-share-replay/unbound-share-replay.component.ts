import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'app-unbound-share-replay',
  template: `
      {{bitcoin$ | async}}
  `,
})
export class UnboundShareReplayComponent implements OnInit {
  bitcoin$;

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.bitcoin$ = this.bitcoinService.getBitcoinPrice();
  }

}
