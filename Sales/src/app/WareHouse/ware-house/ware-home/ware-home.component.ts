import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ware-home',
  templateUrl: './ware-home.component.html',
  styleUrls: ['./ware-home.component.css']
})
export class WareHomeComponent implements OnInit {
  CD=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
