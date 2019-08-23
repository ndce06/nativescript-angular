import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProductComponent } from "./product.component";
import { EditProductComponent } from "./edit-product.component";

const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "edit", component: EditProductComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProductRoutingModule {}
