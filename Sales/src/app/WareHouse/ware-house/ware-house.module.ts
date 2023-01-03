import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WareHouseRoutingModule } from './ware-house-routing.module';
import { WareHouseLoginComponent } from './ware-house-login/ware-house-login.component';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/Material.Module';
import { WareHomeComponent } from './ware-home/ware-home.component';


@NgModule({
  declarations: [
    WareHouseLoginComponent,
    WareHomeComponent
  ],
  imports: [
    CommonModule,
    WareHouseRoutingModule,FormsModule,MaterialExampleModule
  ]
})
export class WareHouseModule { }
