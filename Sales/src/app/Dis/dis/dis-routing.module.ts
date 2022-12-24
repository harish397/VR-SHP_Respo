import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path:"",component:HomeComponent
  },
  {

    path:"Login",component:DistLoginComponent

  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisRoutingModule { }
