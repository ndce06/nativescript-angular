import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyComponent } from "./company.component";
import { CommonModule } from "../../common";
import { EditCompanyComponent } from "./edit-company.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptUIDataFormModule,
    CompanyRoutingModule,
    NativeScriptUIListViewModule,
    CommonModule
  ],
  declarations: [CompanyComponent, EditCompanyComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CompanyModule {}
