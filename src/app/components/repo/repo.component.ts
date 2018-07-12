import { Component, OnInit } from '@angular/core';
import { DataService } from "../../Service/data.service";

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  userName: string;
  name: string;
  avatar_url: string;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
  location: string;
  html_url: string;
  userdetails: object = {};
  errorMessege: string;
  showUserDetails:boolean;
  repoList:any[];
  showRepoList:boolean;

  constructor(private dataService: DataService) {
    console.log("constructor connected... ");
    this.errorMessege = "";
    this.userName = "";
    this.name = "";
    this.avatar_url = "";
    this.created_at = "";
    this.followers = 0;
    this.following = 0;
    this.public_repos = 0;
    this.location = "";
    this.html_url = "";
    this.showUserDetails=false;
    this.repoList=[];
    this.showRepoList=false;
  } //services are injected as dependency in constructor

  ngOnInit() {
    console.log("init connected...");

  }
  getUserRepo() {
    this.dataService.getUserDetails(this.userName).subscribe((user) => {
      this.userdetails = user;
      //console.log(user);
      this.showUserDetails=true;
      this.errorMessege="";
      this.dataService.getRepoDetails(this.userName).subscribe((repoList)=>{
        this.repoList=repoList;
       // console.log(this.repoList);
        this.userName = "";
        this.showRepoList=true;
      })
     

    },(err)=>{
      this.errorMessege=`Response with status ${err.status}: ${err.statusText}`;
      this.showUserDetails=false;
      this.showRepoList=false;
      
    });
   // 
  }



}
