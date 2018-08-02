import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrMeeseeksComponent } from './mr-meeseeks.component';

describe('HelpMeMrMeeseeksComponent', () => {
  let component: MrMeeseeksComponent;
  let fixture: ComponentFixture<MrMeeseeksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MrMeeseeksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrMeeseeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
