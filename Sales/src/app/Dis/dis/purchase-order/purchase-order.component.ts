import { Component, OnInit } from '@angular/core';
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
  constructor(private ser:RegService,private route:ActivatedRoute) 
  {
   // this.route.getCurrentNavigation()?.extras.state.example;
  }

  ngOnInit(){
   this.id= this.route.snapshot.paramMap.get('b');
   return this.ser.Sales(this.id).subscribe((x:any)=>{this.item=x;})
   
  }
  

}
