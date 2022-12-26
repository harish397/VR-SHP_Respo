import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizerLoginComponent } from './authorizer-login/authorizer-login.component';

const routes: Routes = [{
  path:"",component:AuthorizerLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizerRoutingModule { }
