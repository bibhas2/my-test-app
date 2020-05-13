import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class StateCOVIDStats {
  state:string
  positive:number
  death:number
}

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http:HttpClient) { }

  getStateData() : Observable<StateCOVIDStats[]> {
    return this.http.get<StateCOVIDStats[]>("https://covidtracking.com/api/states")
  }
}
