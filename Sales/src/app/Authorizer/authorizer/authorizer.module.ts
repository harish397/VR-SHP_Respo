import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerLoginComponent } from './authorizer-login/authorizer-login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorizerLoginComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,FormsModule
  ]
})
export class AuthorizerModule { }
