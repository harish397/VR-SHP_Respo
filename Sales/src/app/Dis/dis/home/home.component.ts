import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/profiledis/profile/profile.component';
import { RegService } from 'src/app/reg.service';
import { DistLoginComponent } from '../dist-login/dist-login.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  f=new Date();
  

  constructor(private dialog:MatDialog,private ser:RegService) { }
  Id=this.ser.isUser;
  on(Id:any)
  {

    this.dialog.open(ProfileComponent,{height:'80%',width:'40%' , data:Id})
  }

  ngOnInit(): void {
  }


}
