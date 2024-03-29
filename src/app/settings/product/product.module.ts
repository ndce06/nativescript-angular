import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";
import { DropDownModule } from "nativescript-drop-down/angular";

import { ProductRoutingModule } from "./product-routing.module";
import { ProductComponent } from "./product.component";
import { CommonModule } from "../../common";
import { EditProductComponent } from "./edit-product.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptUIDataFormModule,
    ProductRoutingModule,
    NativeScriptUIListViewModule,
    CommonModule,
    DropDownModule
  ],
  declarations: [ProductComponent, EditProductComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductModule {}
