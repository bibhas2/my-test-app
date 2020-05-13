import { Component, OnInit } from '@angular/core';
import { CovidDataService, StateCOVIDStats } from '../covid-data.service';

@Component({
  selector: 'app-state-data-display',
  templateUrl: './state-data-display.component.html',
  styleUrls: ['./state-data-display.component.css']
})
export class StateDataDisplayComponent implements OnInit {
  stateDataList:StateCOVIDStats[] = []

  constructor(private covidSvc:CovidDataService) { }

  ngOnInit(): void {
    //Show a wait indicator

    this.covidSvc.getStateData().subscribe((stateList:StateCOVIDStats[]) => {
      //Hide the wait indicator
      this.stateDataList = stateList
    },
    //Show error. Hide the wait indicator
    (error) => alert("Sorry there was a problem.")
    )
  }

  sortList(propToSortBy:string) {
    this.stateDataList = this.stateDataList.sort((a, b) => {
      let valueA = a[propToSortBy]
      let valueB = b[propToSortBy]

      if (valueA > valueB) {
        return -1
      } else if (valueA < valueB) {
        return 1
      } else {
        return 0
      }
    })
  }

}
