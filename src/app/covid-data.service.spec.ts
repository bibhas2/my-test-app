import { TestBed } from '@angular/core/testing';

import { CovidDataService } from './covid-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('CovidDataService', () => {
  let service: CovidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(CovidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should GET state data successfully', (done) => {
    service.getStateData().subscribe((data) => {
      expect(data).not.toBeNull()

      done()
    })
  });

  it('Should have FL data', (done) => {
    service.getStateData().subscribe((statList) => {
      expect(statList.find(s => s.state == "FL")).toBeDefined()

      done()
    })
  });

});
