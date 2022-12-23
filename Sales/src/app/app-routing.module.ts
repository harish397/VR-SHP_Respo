import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {
    path:"",component:MasterComponent
  },
  {
    path:"a",loadChildren:()=>import('./Dis/dis/dis.module').then(m=>m.DisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
