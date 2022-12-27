import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorizer-login',
  templateUrl: './authorizer-login.component.html',
  styleUrls: ['./authorizer-login.component.css']
})
export class AuthorizerLoginComponent implements OnInit {

  userName!:string;
  Password!:string;
  currentDate=new Date();
  constructor() { }
log(){
  
}
  ngOnInit(): void {
  }

}
