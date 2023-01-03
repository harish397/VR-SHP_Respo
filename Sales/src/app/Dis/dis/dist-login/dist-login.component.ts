import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, Routes } from '@angular/router';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-dist-login',
  templateUrl: './dist-login.component.html',
  styleUrls: ['./dist-login.component.css']
})
export class DistLoginComponent implements OnInit {
 
  loginform!:any

  currentDate=new Date();
  constructor(private route:Router,private Ser:RegService) { }
  

  ngOnInit(): void {
    this.loginform=new FormGroup({
      UserName:new FormControl(''),
      ID:new FormControl(''),
      d:new FormControl('')
    });
  }
  
  login()
  {
   this.Ser.LogData(this.loginform.value.UserName,this.loginform.value.ID)
   {
    console.log(this.Ser.isUser)
     
    if(this.Ser.isUser)
    {
      this.route.navigate(['/Distributor/home'])
    }
    
    else
    {
      alert("enter crct details");
    }
  }
   }
      
      
  }
  
    
  


