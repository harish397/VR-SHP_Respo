import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisRoutingModule } from './dis-routing.module';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/Material.Module';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    DistLoginComponent,
    MyProfileComponent,
    PurchaseOrderComponent,
   
    StockComponent,
         HomeComponent,
         ProductComponent
  ],
  imports: [
    CommonModule,
    DisRoutingModule,MaterialExampleModule,ReactiveFormsModule,FormsModule
  ]
})
export class DisModule { }
