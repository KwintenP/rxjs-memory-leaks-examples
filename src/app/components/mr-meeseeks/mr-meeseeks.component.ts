import { Component, Input, OnInit } from '@angular/core';
import { MrMeeseeks } from '../../models/mr-meeseeks.entity';

@Component({
  selector: 'mr-meeseeks',
  template: `
        {{mrMeeseeks.x}}
        <div [style.transform]="'translate(' + mrMeeseeks.x + 'px, ' + mrMeeseeks.y + 'px)'">
            <img src="assets/img/mr_meeseeks.png" alt="mr meeseeks"
                 [style.transform]="'rotate(' + mrMeeseeks.rotation + 'deg)'">
        </div>
    `,
  styleUrls: ['./mr-meeseeks.component.scss']
})
export class MrMeeseeksComponent implements OnInit {
  @Input()
  mrMeeseeks: MrMeeseeks;

  constructor() {}

  ngOnInit() {}
}
