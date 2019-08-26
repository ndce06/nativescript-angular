import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { ColorRoutingModule } from "./color-routing.module";
import { ColorComponent } from "./color.component";
import { CommonModule } from "../../common";
import { EditColorComponent } from "./edit-color.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptUIDataFormModule,
    ColorRoutingModule,
    NativeScriptUIListViewModule,
    CommonModule
  ],
  declarations: [ColorComponent, EditColorComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ColorModule {}
