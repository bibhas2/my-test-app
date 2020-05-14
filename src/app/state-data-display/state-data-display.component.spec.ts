import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDataDisplayComponent } from './state-data-display.component';
import { HttpClientModule } from '@angular/common/http';

describe('StateDataDisplayComponent', () => {
  let component: StateDataDisplayComponent;
  let fixture: ComponentFixture<StateDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
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

  it('Should fetch data', (done) => {
    component.fetchStateData().subscribe(data => {
      expect(data).toBeDefined()
      done()
    })
  });

  it('Should have NY data', (done) => {
    component.fetchStateData().subscribe(statList => {
      expect(statList.find(s => s.state == "NY")).toBeDefined()
      done()
    })
  });

  it('Should sort correctly', (done) => {
    component.fetchStateData().subscribe(statList => {
      component.sortList("death")

      expect(component.stateDataList[0].state == "NY").toBeTruthy()
      done()
    })
  });

});
