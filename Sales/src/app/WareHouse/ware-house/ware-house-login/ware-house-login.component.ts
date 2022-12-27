import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ware-house-login',
  templateUrl: './ware-house-login.component.html',
  styleUrls: ['./ware-house-login.component.css']
})
export class WareHouseLoginComponent implements OnInit {
  userName!:string;
  Password!:string;
  currentDate=new Date();
  constructor() { }
log(){
  
}
  ngOnInit(): void {
  }

}
