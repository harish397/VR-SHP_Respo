import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  CD=new Date();
  salesInfo!:any;
  loginform!:any;

  columns:string[]=["UserName" ,"PhoneNumber","FirstName","TIN_No","PAN_No","Bank_Acc_No","IFSC_Code"];
  dataSource=new MatTableDataSource;

  constructor(private da:RegService) { }

  

  ngOnInit():void {
    this.get();
  }
  get()
  {

   return this.da.getData().subscribe((x:any)=>{this.loginform=new MatTableDataSource(x)});
    
  }

    /*
    this.salesInfo=new FormGroup(
      {
        UserName:new FormControl(''),
        PhoneNumber:new FormControl(''),
        FirstName:new FormControl(''),
        TIN_No:new FormControl(''),
        PAN_No:new FormControl(''),
        Bank_Acc_No:new FormControl(''),
        IFSC_Code:new FormControl('')
      }
    );
    this.salesInfo.patchvalue({
      UserName:this.data.UserName,
       PhoneNumber:this.data.PhoneNumber,
       FirstName:this.data.FirstName,
       TIN_No:this.data.TIN_No,
       PAN_No:this.data.PAN_No,
       Bank_Acc_No:this.data.Bank_Acc_No,
       IFSC_Code:this.data.IFSC_Code
    })
  }*/
      
    harisg(){
      
    }
  }
  


