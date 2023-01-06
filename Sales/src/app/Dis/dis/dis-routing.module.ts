import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistLoginComponent } from './dist-login/dist-login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProduuctComponent } from './produuct/produuct.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [

  {

    path:"login",component:DistLoginComponent

  },
  {
    path:"",component:ProduuctComponent
  },
  {
    path:"home",component:HomeComponent
  },

  
   
    {
      path:"stock",component:StockComponent
    },

    {
      path:"get",component:ProductComponent
    }

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisRoutingModule { }
