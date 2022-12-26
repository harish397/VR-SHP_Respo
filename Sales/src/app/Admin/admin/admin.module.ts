import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
