import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(
    private http:HttpClient
  ) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey =  "b513f83cd7a6b8ba56f408449a3382dd";

  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

}
