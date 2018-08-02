import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSubscribeComponent } from './store-subscribe.component';

describe('StoreSubscribeComponent', () => {
  let component: StoreSubscribeComponent;
  let fixture: ComponentFixture<StoreSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreSubscribeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
