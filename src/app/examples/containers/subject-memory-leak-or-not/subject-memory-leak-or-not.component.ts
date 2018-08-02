import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-subject-memory-leak-or-not',
  template: `
        <form>
            <mat-form-field>
                <input matInput type="text" [formControl]="testControl">
            </mat-form-field>
        </form>
    `
})
export class SubjectMemoryLeakOrNotComponent implements OnInit {
  testControl = new FormControl();
  timings = { delay: 200 };
  hugeArray = [];

  constructor() {
    for (let i = 0; i < 250000; i++) {
      this.hugeArray.push(Math.ceil(Math.random() * 100));
    }
  }

  mapFunction(val) {
    return val;
  }

  ngOnInit() {
    this.testControl.valueChanges
      .pipe(debounceTime(20000), map(this.mapFunction))
      .subscribe(console.log);
  }
}
