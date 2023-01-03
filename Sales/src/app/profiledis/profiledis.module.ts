import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfiledisRoutingModule } from './profiledis-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/Material.Module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfiledisRoutingModule,FormsModule,MaterialExampleModule
  ]
})
export class ProfiledisModule { }
