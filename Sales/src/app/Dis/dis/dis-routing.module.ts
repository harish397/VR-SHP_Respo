import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    path:"",component:DistLoginComponent
=======
    path:"b",component:DistLoginComponent
  },
  {
    path:"",component:HomeComponent
>>>>>>> Stashed changes
=======
    path:"Login",component:DistLoginComponent
>>>>>>> Stashed changes
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisRoutingModule { }
