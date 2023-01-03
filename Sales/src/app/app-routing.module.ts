import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {
    path:"",component:MasterComponent
  },
  {
    path:"Distributor",loadChildren:()=>import('./Dis/dis/dis.module').then(m=>m.DisModule)
  },
  {
    path:"AdminLog",loadChildren:()=>import('./Admin/admin/admin.module').then(m=>m.AdminModule)
  },

  {
    path:"Admin",loadChildren:()=>import('./Admin/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:"Authorizer",loadChildren:()=>import('./Authorizer/authorizer/authorizer.module').then(m=>m.AuthorizerModule)
  },
  {
path:"WareHouse",loadChildren:()=>import('./WareHouse/ware-house/ware-house.module').then(m=>m.WareHouseModule)
  },
  {
    path:"Shiva",loadChildren:()=>import ('./profiledis/profiledis.module').then(m=>m.ProfiledisModule)
  },
  // {
  //   path:"home",component:HomeComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
