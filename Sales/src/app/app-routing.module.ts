import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Dis/dis/home/home.component';
import { MyProfileComponent } from './Dis/dis/my-profile/my-profile.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {
    path:"",component:MasterComponent
  },
  {
    path:"Distributor",loadChildren:()=>import('./Dis/dis/dis.module').then(m=>m.DisModule)
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"Admin",loadChildren:()=>import('./Admin/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:"Authorizer",loadChildren:()=>import('./Authorizer/authorizer/authorizer.module').then(m=>m.AuthorizerModule)
  },
  {
path:"WareHouse",loadChildren:()=>import('./WareHouse/ware-house/ware-house.module').then(m=>m.WareHouseModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
