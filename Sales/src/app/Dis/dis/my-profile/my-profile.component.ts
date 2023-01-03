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

  constructor(private da:RegService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ID:any=localStorage.getItem('IsUser')

  ngOnInit() {
   // this.get();
  this.getby();
    
    this.salesInfo=new FormGroup(
      {
        ID:new FormControl(''),
        UserName:new FormControl(''),
        PhoneNumber:new FormControl(''),
        FirstName:new FormControl(''),
        TIN_No:new FormControl(''),
        PAN_No:new FormControl(''),
        Bank_Acc_No:new FormControl(''),
        IFSC_Code:new FormControl('')
      }
    );
    this.salesInfo.patchValue({
      ID:this.data[0].ID,
      UserName:this.data.UserName,
       PhoneNumber:this.data.PhoneNumber,
       FirstName:this.data.FirstName,
       TIN_No:this.data.TIN_No,
       PAN_No:this.data.PAN_No,
       Bank_Acc_No:this.data.Bank_Acc_No,
       IFSC_Code:this.data.IFSC_Code
    })
  }
  getby() 
  {
  return this.da.getByID(this.salesInfo.ID).subscribe((y:any)=>{this.salesInfo=y;})
  }
  
 /*
  get()
  {

   return this.da.getData().subscribe((x:any)=>{this.loginform=new MatTableDataSource(x)});
    
  }*/
  
}
    
  
  
  




