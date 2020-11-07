import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  private allMissionsUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';

  constructor(private http: HttpClient) {}

    getSpaceXData() : Observable<any>{
      return this.http.get(this.allMissionsUrl);
    }

    getMissionsByFilter(params:any): Observable<any> {
      return this.http.get<any>(this.allMissionsUrl,{params:params})
    }
}
