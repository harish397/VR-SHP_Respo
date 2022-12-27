import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerLoginComponent } from './authorizer-login/authorizer-login.component';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/Material.Module';


@NgModule({
  declarations: [
    AuthorizerLoginComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,FormsModule,MaterialExampleModule
  ]
})
export class AuthorizerModule { }
