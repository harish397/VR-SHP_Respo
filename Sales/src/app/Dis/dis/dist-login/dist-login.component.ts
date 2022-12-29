import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-dist-login',
  templateUrl: './dist-login.component.html',
  styleUrls: ['./dist-login.component.css']
})
export class DistLoginComponent implements OnInit {
  userName:any;
  Password:any;
 
  loginform=new FormGroup({
    userName:new FormControl(''),
    Password:new FormControl(''),
    d:new FormControl('')
  })
  currentDate=new Date();
  constructor(private route:Router,private Ser:RegService) { }
 
  ngOnInit(): void {
  }
  
  log()
  {
 
      this.Ser.LogData(this.loginform.value.userName,this.loginform.value.Password);

      console.log(this.loginform.value.d)
      console.log(this.Ser.DataInfo)
      
       if(this.Ser.DataInfo=="Exists"){
        this.route.navigate(['product'])
  }
    
  
    
  }
}
