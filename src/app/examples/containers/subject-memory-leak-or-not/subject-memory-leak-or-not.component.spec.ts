import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMemoryLeakOrNotComponent } from './subject-memory-leak-or-not.component';

describe('SubjectMemoryLeakOrNotComponent', () => {
  let component: SubjectMemoryLeakOrNotComponent;
  let fixture: ComponentFixture<SubjectMemoryLeakOrNotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectMemoryLeakOrNotComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMemoryLeakOrNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
