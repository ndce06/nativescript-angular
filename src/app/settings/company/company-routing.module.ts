import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CompanyComponent } from "./company.component";
import { EditCompanyComponent } from "./edit-company.component";

const routes: Routes = [
  { path: "", component: CompanyComponent },
  { path: "edit", component: EditCompanyComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CompanyRoutingModule {}
