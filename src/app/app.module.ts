import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { UserDetailsComponent } from './user-details/user-details.component';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: 'search-results/:value', component: SearchresultsComponent },
  { path: 'userDetails', component: UserDetailsComponent },
];  

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchresultsComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]

})
export class AppModule { }
