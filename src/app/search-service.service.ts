import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private http:HttpClient) { }
  searchUrl = "https://api.github.com/search/users?q=";
  followUrl="https://api.github.com/users/";
  

  getSearchResults(value){
    return this.http.get(this.searchUrl + value)
  }
  getUserDetails(value){
      return this.http.get(this.followUrl+value)
  }
  
}
