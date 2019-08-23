import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ColorComponent } from "./color.component";
import { EditColorComponent } from "./edit-color.component";

const routes: Routes = [
  { path: "", component: ColorComponent },
  { path: "edit", component: EditColorComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ColorRoutingModule {}
