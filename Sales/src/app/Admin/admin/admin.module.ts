import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/Material.Module';


@NgModule({
  declarations: [
   
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
   ,MaterialExampleModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
