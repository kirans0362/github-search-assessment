import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../search-service.service';
import {ActivatedRoute} from  '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  value: any;
  private sub: any;
  search:any;
  pagenationOptions = [] ;
  pageMaxLength: any;
  displaySearch=[];
  pageNumber:any =1;
  followersCount:any;
  constructor(private route:ActivatedRoute,
    private searchService:SearchServiceService,
    private router:Router) { }
    
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.value = params['value']
      this.pagenationOptions =[];
      this.pageNumber=1;
    // API Call to get search results
    this.searchService.getSearchResults(this.value)
    .subscribe((data)=> {
      this.search = data;
      this.displaySearch =[];
      //Pagination Code 
      this.pageMaxLength = this.search.items.length;
      for(var i =0;i<Math.ceil(this.pageMaxLength/5);i++){
        this.pagenationOptions.push(i+1);
      }
      //When there are less than five elements in table.
      if(this.pagenationOptions.length == 0)this.pagenationOptions =[1];
      // to display first five items in the table;
        this.displaySearch =[];
        for(let i=0;i<5;i++){
          if(this.search.items[i]){
            this.displaySearch.push({
              items:this.search.items[i],
              following:i,
              followers:Math.floor(Math.random() * 100) + 1 
            })
          }
        }     
    },
    (error)=>{
      console.log(error);
    })
   });
  
  }
  public pageChange(num){
    this.pageNumber = num;
    this.displaySearch =[];
    let i = num*5 - 5;
    while(i< num*5){
        if(this.search.items[i]){
          this.displaySearch.push({
          items:this.search.items[i],
          following:i,
          followers:Math.floor(Math.random() * 100) + 1 
        })
        }
        i++;
    }
  }
  public pageClick(value){
    if(value == 'next'){
      this.pageNumber++;
      this.pageChange(this.pageNumber);
    }else{
      this.pageNumber--;
      this.pageChange(this.pageNumber);
    }
  }

}
