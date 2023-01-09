import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-produuct',
  templateUrl: './produuct.component.html',
  styleUrls: ['./produuct.component.css']
})
export class ProduuctComponent implements OnInit {


loginform:any;


  constructor(private ser:RegService,private dia:MatDialog) { }
  @ViewChild(MatSort) Sort:MatSort|any;
  
  columns:string[]=['imageID','productFamily','product','productImage1','Action']
  dataSource=new MatTableDataSource;

  ngOnInit(): void {
    this.ser.getImg().subscribe((x:any)=>{this.loginform= new MatTableDataSource(x);
      this.loginform.sort=this.Sort
    })

  }
  filter(e:any)
  {
    return this.loginform.filter=e.target.value;
  }
  view(imageID:any)
  {
    this.dia.open(ProductComponent,{height:'100%',width:'100%',data:imageID})
  }

}
