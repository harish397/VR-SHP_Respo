import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DistLoginComponent } from '../dist-login/dist-login.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  f=new Date();
  //columns:string[]=['Manage']
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }


}
