import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductComponent } from './product/product.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [

  {

    path:"Login",component:DistLoginComponent

  },
  {
    path:"purchase",component:PurchaseOrderComponent
  },
  
    {
      path:"profile",component:MyProfileComponent
    },
    {
      path:"stock",component:StockComponent
    },
    {
      path:"product",component:ProductComponent
    }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisRoutingModule { }
