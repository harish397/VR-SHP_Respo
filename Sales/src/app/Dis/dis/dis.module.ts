import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisRoutingModule } from './dis-routing.module';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/Material.Module';
import { ProductComponent } from './product/product.component';
import { ProduuctComponent } from './produuct/produuct.component';


@NgModule({
  declarations: [
    DistLoginComponent,
  
    PurchaseOrderComponent,
   
    StockComponent,
         HomeComponent,
         ProductComponent,
         ProduuctComponent
  ],
  imports: [
    CommonModule,
    DisRoutingModule,MaterialExampleModule,ReactiveFormsModule
  ]
})
export class DisModule { }
