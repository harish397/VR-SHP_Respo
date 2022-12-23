import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
 x='SALE & DISTRIBUTION '
  public isAuthenticated = false;
  currentdate=new Date();
  
  public logout(): void {
    // todo
  }
  constructor() { }

  ngOnInit(): void {
  }

}
