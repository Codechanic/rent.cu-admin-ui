import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesListComponent } from './houses-list/houses-list.component';
import { HousesAddEditComponent } from './houses-add-edit/houses-add-edit.component';

@NgModule({
  declarations: [HousesListComponent, HousesAddEditComponent],
  imports: [
    CommonModule,
    HousesRoutingModule
  ]
})
export class HousesModule {
}