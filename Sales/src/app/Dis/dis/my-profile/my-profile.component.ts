import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  CD=new Date();
  salesInfo!:any;
  constructor(private data:RegService) { }

  ngOnInit(): void {

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
      // UserName:this.data.UserName,
      // PhoneNumber:this.data.
    })
      
    
  }


}
