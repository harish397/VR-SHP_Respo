import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WareHouseLoginComponent } from './ware-house-login/ware-house-login.component';

const routes: Routes = [{
  path:"",component:WareHouseLoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WareHouseRoutingModule { }
