import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MrMeeseeks } from '../../models/mr-meeseeks.entity';

@Component({
  selector: 'help-me-mr-meeseeks-component',
  template: `
        <div class="buttons">
            <button mat-button
                    (click)="askMrMeeseeksForHelp()">
                <img src="assets/img/mr_meeseeks_button.png" alt="mr meeseeks button">
            </button>
            <button mat-button
                    (click)="releaseMrMeeseeks()">
                <mat-icon>exit_to_app</mat-icon>
            </button>
        </div>
        <mr-meeseeks *ngFor="let item of mrMeeseeks" [mrMeeseeks]="item"></mr-meeseeks>
    `,
  styleUrls: ['./help-me-mr-meeseeks.component.scss']
})
export class HelpMeMrMeeseeksComponent {
  mrMeeseeks: Array<MrMeeseeks> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  askMrMeeseeksForHelp() {
    interval(1000)
      .pipe(map(this.createMrMeeseeks))
      .subscribe(newMrMeeseeks => this.mrMeeseeks.push(newMrMeeseeks));
  }

  releaseMrMeeseeks() {
    this.router.navigate(['..', 'overview'], {
      relativeTo: this.activatedRoute
    });
  }

  private createMrMeeseeks() {
    const randomNr = highest => Math.floor(Math.random() * Math.floor(highest));

    return {
      rotation: randomNr(360),
      x: randomNr(200),
      y: randomNr(500)
    };
  }
}
