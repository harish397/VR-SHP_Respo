import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WareHomeComponent } from './ware-home/ware-home.component';
import { WareHouseLoginComponent } from './ware-house-login/ware-house-login.component';

const routes: Routes = [{
  path:"",component:WareHouseLoginComponent
},
{
  path:"WareHome",component:WareHomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WareHouseRoutingModule { }
