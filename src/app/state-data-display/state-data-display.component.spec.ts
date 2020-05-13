import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDataDisplayComponent } from './state-data-display.component';

describe('StateDataDisplayComponent', () => {
  let component: StateDataDisplayComponent;
  let fixture: ComponentFixture<StateDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
