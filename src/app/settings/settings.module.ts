import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { CommonModule } from "../common";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    SettingsRoutingModule,
    NativeScriptUIListViewModule,
    CommonModule
  ],
  declarations: [SettingsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SettingsModule {}
