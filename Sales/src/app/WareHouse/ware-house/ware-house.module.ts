import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WareHouseRoutingModule } from './ware-house-routing.module';
import { WareHouseLoginComponent } from './ware-house-login/ware-house-login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WareHouseLoginComponent
  ],
  imports: [
    CommonModule,
    WareHouseRoutingModule,FormsModule
  ]
})
export class WareHouseModule { }
