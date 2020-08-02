import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../search-service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService:SearchServiceService,
              private router:Router) { }
  public showSearchResults(e){
    let value = e.target.value == '' ? "example": e.target.value;
    // Routing to search results component
    this.router.navigate(['/search-results',value])
  }
  ngOnInit(): void { 
  }

}
