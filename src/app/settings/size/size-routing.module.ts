import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SizeComponent } from "./size.component";
import { EditSizeComponent } from "./edit-size.component";

const routes: Routes = [
  { path: "", component: SizeComponent },
  { path: "edit", component: EditSizeComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class SizeRoutingModule {}
