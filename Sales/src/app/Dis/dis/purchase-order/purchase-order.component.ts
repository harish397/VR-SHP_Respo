import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
CD=new Date();
id:any;
item:any;
productform!:any;



columns:string[]=['ID','product_price','Shipping','GST','delivery','Grand_Total']
  dataSource=new MatTableDataSource;

  
  constructor(private ser:RegService,private route:ActivatedRoute) 
  {
   // this.route.getCurrentNavigation()?.extras.state.example;
  }

  ngOnInit(){
   this.id= this.route.snapshot.paramMap.get('b');
   this.ser.Sales(this.id).subscribe((e:any)=>{this.item=e;})
console.log(this.productform)
   
  }

}
