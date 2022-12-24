import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-dist-login',
  templateUrl: './dist-login.component.html',
  styleUrls: ['./dist-login.component.css']
})
export class DistLoginComponent implements OnInit {
  userName!:any;
  Password!:any;
  constructor(private route:Router) { }
 
  ngOnInit(): void {
  }
  
  log()
  {
     if(this.userName=="VRSHP@123"&& this.Password=="VRSHP123")
      {
        console.log("Login works");
        this.route.navigate(["home"]);
      }
       
    
  }
}
