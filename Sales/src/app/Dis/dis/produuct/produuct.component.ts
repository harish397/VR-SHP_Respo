import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-produuct',
  templateUrl: './produuct.component.html',
  styleUrls: ['./produuct.component.css']
})
export class ProduuctComponent implements OnInit {
data:any;
id=1;
  constructor(private ser:RegService,private dia:MatDialog) { }

  ngOnInit(): void {
    this.ser.getImg().subscribe((x:any)=>{this.data=x})

  }
  view(imageID:any)
  {
    this.dia.open(ProductComponent,{height:'100%',width:'100%',data:imageID})
  }

}
