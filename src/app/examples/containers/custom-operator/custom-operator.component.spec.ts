import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOperatorComponent } from './custom-operator.component';

describe('CustomOperatorComponent', () => {
  let component: CustomOperatorComponent;
  let fixture: ComponentFixture<CustomOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomOperatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
