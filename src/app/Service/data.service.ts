import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { catchError,map } from "rxjs/operators";
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  clintId:string = "adb576eed3265efa81d5";
  clientSecret:string = "e9aa9738568ac561c87b98d26f19cba9517b4793";

  constructor(public http:Http) { 

    console.log("data service connected");
  }
  getUserDetails(username){
  
return this.http.get(`https://api.github.com/users/${username}?client_id=${this.clintId}&client_secret=${this.clientSecret}`)
.pipe(
  map(res=> res.json()),
  catchError(error=>{
    return throwError(error);
  })
)


  }
  getRepoDetails(username){
    //this api will return 5 latest repo.change "per_page" value accordingly
    return this.http.get(`https://api.github.com/users/${username}/repos?client_id=${this.clintId}&client_secret=${this.clientSecret}&per_page=5&sort=created`)
    .pipe(
      map(res=> res.json()),
      catchError((error)=>{
        return throwError(error);
      })
    )

      } 
}
