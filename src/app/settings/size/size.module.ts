import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { SizeRoutingModule } from "./size-routing.module";
import { SizeComponent } from "./size.component";
import { filterPipe } from "../../common";
import { EditSizeComponent } from "./edit-size.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptUIDataFormModule,
    SizeRoutingModule,
    NativeScriptUIListViewModule
  ],
  declarations: [SizeComponent, EditSizeComponent, filterPipe],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SizeModule {}
