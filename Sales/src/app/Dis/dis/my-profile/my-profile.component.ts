import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
=======
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
>>>>>>> Stashed changes
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  CD=new Date();
 
  
  ID:number=101;
  UserName!:any;
  PhoneNumber!:any;
  FirstName!:any;
  TIN_No!:any;
  PAN_No!:any;
  Bank_Acc_No!:any;
  IFSC_Code!:any;
  salesInfo!:any;
<<<<<<< Updated upstream
  constructor(private da:RegService,@Inject(MAT_DIALOG_DATA) public data:any) { }
=======
  loginform!:any;

  constructor(private da:RegService,@Inject(MAT_DIALOG_DATA) public data:any,private v:MatDialog) { }
>>>>>>> Stashed changes

  

  ngOnInit():void {
    this.getby();

  // this.salesInfo=new FormGroup(
  //     {
  //       ID:new FormControl(''),
  //       UserName:new FormControl(''),
  //       PhoneNumber:new FormControl(''),
  //       FirstName:new FormControl(''),
  //       TIN_No:new FormControl(''),
  //       PAN_No:new FormControl(''),
  //       Bank_Acc_No:new FormControl(''),
  //       IFSC_Code:new FormControl('')
  //     }
  //  );
  //   this.salesInfo.patchValue({
  //     ID:this.data.ID,
  //     UserName:this.data.UserName,
  //      PhoneNumber:this.data.PhoneNumber,
  //      FirstName:this.data.FirstName,
  //      TIN_No:this.data.TIN_No,
  //      PAN_No:this.data.PAN_No,
  //      Bank_Acc_No:this.data.Bank_Acc_No,
  //      IFSC_Code:this.data.IFSC_Code
  //   });
  //   console.log(this.salesInfo);
  }
  getby()
  {
  return  this.da.getByID(this.ID).subscribe((y:any)=>
  {this.salesInfo=y; 
    
  this.ID=this.salesInfo[0].ID;
  this.UserName=this.salesInfo[0].UserName;
  this.PhoneNumber=this.salesInfo[0].PhoneNumber;
  this.FirstName=this.salesInfo[0].FirstName;
  this.TIN_No=this.salesInfo[0].TIN_No;
  this.PAN_No=this.salesInfo[0].PAN_No;
  this.Bank_Acc_No=this.salesInfo[0].Bank_Acc_No;
  this.IFSC_Code=this.salesInfo[0].IFSC_Code;

  
  })
  }
  x(){
    this.v.closeAll();
  }
  
 /*
  get()
  {

   return this.da.getData().subscribe((x:any)=>{this.loginform=new MatTableDataSource(x)});
    
  }*/
  
}
    
  
  
  




