import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorizer-login',
  templateUrl: './authorizer-login.component.html',
  styleUrls: ['./authorizer-login.component.css']
})
export class AuthorizerLoginComponent implements OnInit {

  userName!:string;
  Password!:string;
  constructor() { }
log(){
  
}
  ngOnInit(): void {
  }

}
