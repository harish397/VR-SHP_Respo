import { Component, OnInit } from '@angular/core';
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
  currentDate=new Date();
  constructor(private route:Router,private Ser:RegService) { }
 
  ngOnInit(): void {
  }
  
  log()
  {
    //  if(this.userName=="101"&& this.Password=="VRSHP123")
    //   {
    //     console.log("Login works");
    //    this.route.navigate(["/Distributor/home"]);

    //   }


      // else{
      //   alert("Enter Valid credentials")
      // }
      
      this.Ser.LogData(this.userName.value,this.Password.value);


      console.log(this.Ser.DataInfo)
       
      setTimeout(()=>{
        if(this.Ser.DataInfo=="exists"){
          this.route.navigate(['home'])
        }
      })
    
  }
}
