import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DislogRoutingModule } from './dislog-routing.module';
import { DislogCompComponent } from './dislog-comp/dislog-comp.component';


@NgModule({
  declarations: [
    DislogCompComponent
  ],
  imports: [
    CommonModule,
    DislogRoutingModule
  ]
})
export class DislogModule { }
