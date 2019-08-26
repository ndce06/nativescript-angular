import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { SizeRoutingModule } from "./size-routing.module";
import { SizeComponent } from "./size.component";
import { CommonModule } from "../../common";
import { EditSizeComponent } from "./edit-size.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIDataFormModule,
    SizeRoutingModule,
    NativeScriptUIListViewModule,
    CommonModule
  ],
  declarations: [SizeComponent, EditSizeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SizeModule {}
