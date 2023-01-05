import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/reg.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
CD=new Date();
id=1;
data!:any;
item:any;
  constructor(private ser:RegService) { }

  ngOnInit(): void {
this.Sk(this.id);
  }
  Sk(id:any)
  {
    return this.ser.Sales(this.id).subscribe((x:any)=>{this.item=x})
  }

}
