import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisRoutingModule } from './dis-routing.module';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';


@NgModule({
  declarations: [
    DistLoginComponent,
    MyProfileComponent,
    PurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    DisRoutingModule
  ]
})
export class DisModule { }
