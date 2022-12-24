import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisRoutingModule } from './dis-routing.module';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockComponent } from './stock/stock.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DistLoginComponent,
    MyProfileComponent,
    PurchaseOrderComponent,
   
    StockComponent,
         HomeComponent
  ],
  imports: [
    CommonModule,
    DisRoutingModule,FormsModule
  ]
})
export class DisModule { }
