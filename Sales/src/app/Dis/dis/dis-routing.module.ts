import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistLoginComponent } from './dist-login/dist-login.component';

const routes: Routes = [
  {
    path:"b",component:DistLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisRoutingModule { }
