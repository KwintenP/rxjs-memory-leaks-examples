import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs/index';
import { MrMeeseeks } from '../../models/mr-meeseeks.entity';
import { timer } from 'rxjs';

@Component({
  selector: 'app-help-me-multiple-times-mr-meeseeks',
  template: `
      <div class="buttons">
          <button mat-button
                  (click)="askMrMeeseeksForHelp()">
              <img src="assets/img/mr_meeseeks_button.png" alt="mr meeseeks button">
          </button>
          <button mat-button
                  (click)="askMrMeeseeksForHelpAgain()">
              <mat-icon>rotate_left</mat-icon>
          </button>
          <button mat-button
                  (click)="releaseMrMeeseeks()">
              <mat-icon>exit_to_app</mat-icon>
          </button>
      </div>
      <mr-meeseeks *ngFor="let item of mrMeeseeks" [mrMeeseeks]="item"></mr-meeseeks>
  `,
  styleUrls: ['./help-me-multiple-times-mr-meeseeks.component.scss']
})
export class HelpMeMultipleTimesMrMeeseeksComponent implements OnDestroy {
    mrMeeseeks: Array<MrMeeseeks> = [];
    private subscription: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    askMrMeeseeksForHelp() {
        this.subscription = timer(0, 1000)
            .pipe(map(this.createMrMeeseeks))
            .subscribe(newMrMeeseeks => this.mrMeeseeks.push(newMrMeeseeks));
    }

    askMrMeeseeksForHelpAgain() {
        this.mrMeeseeks = [];
        this.subscription = timer(0, 1000)
            .pipe(map(this.createMrMeeseeks))
            .subscribe(newMrMeeseeks => this.mrMeeseeks.push(newMrMeeseeks));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
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
