import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Dis/dis/home/home.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
