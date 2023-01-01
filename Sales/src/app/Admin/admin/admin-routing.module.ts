import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Dis/dis/home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [{
  path:"",component:AdminLoginComponent,

},
{
  path:"home",component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
