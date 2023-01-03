import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from 'src/app/profiledis/profile/profile.component';
import { RegService } from 'src/app/reg.service';

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

    this.dialog.open(ProfileComponent,{height:'100%',width:'43%' , data:Id})
  }

  ngOnInit(): void {
  }


}
