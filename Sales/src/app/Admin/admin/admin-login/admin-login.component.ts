import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  loginform:any;
  isUser:any;
  currentDate=new Date();
  constructor(private Ser:RegService,private r:Router) { }
  ngOnInit(): void {
    this.loginform=new FormGroup({
      userName:new FormControl(''),
      password:new FormControl(''),
      d:new FormControl('')

    });
  }
log()
{
  this.Ser.AdminLD(this.loginform.value.userName,this.loginform.value.password).subscribe((s:any)=>{
    this.isUser = s;
    console.log(this.isUser)
   
      if(this.isUser)
      {
        this.r.navigate(['/AdminLog/home'])
      }
      
      else{
        alert("enter crct details");
      }
    })

}


}
