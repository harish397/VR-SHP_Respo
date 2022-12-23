import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisRoutingModule } from './dis-routing.module';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    DistLoginComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    DisRoutingModule
  ]
})
export class DisModule { }
