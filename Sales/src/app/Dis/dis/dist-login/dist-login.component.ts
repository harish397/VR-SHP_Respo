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
 
 loginform!:any;
 /* loginform=new FormGroup({
    UserName:new FormControl(),
    ID:new FormControl(),
    d:new FormControl()
  })*/
  currentDate=new Date();
  constructor(private route:Router,private Ser:RegService) { }
  isUser : any;

  ngOnInit(): void {
    this.loginform=new FormGroup({
      UserName:new FormControl(),
      ID:new FormControl(),
      d:new FormControl()
    })
  }
  
  login()
  {
   this.Ser.LogData(this.loginform.value.UserName,this.loginform.value.ID).subscribe((s:any)=>{
      this.isUser = s;
      console.log(this.isUser)
     
        if(this.isUser)
        {
          this.route.navigate(['/Distributor/home'])
        }
        
        else{
          alert("enter crct details");
        }
      })
      
  }
  
    
  }


