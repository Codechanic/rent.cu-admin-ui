import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { BsDatepickerModule, ModalModule } from "ngx-bootstrap";

import { DeleteComponent } from "./delete/delete.component";
import { SeasonModalComponent } from "./season-modal/season-modal.component";
import { HousePreviewComponent } from "./house-preview/house-preview.component";

@NgModule({
  declarations: [DeleteComponent, SeasonModalComponent, HousePreviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [
    SeasonModalComponent,
    HousePreviewComponent
  ],
  exports: [DeleteComponent, SeasonModalComponent, HousePreviewComponent]
})
export class ModalsModule {
}
