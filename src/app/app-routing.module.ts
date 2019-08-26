import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    // { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "settings", children: [
        {
            path: "size",
            loadChildren: "~/app/settings/size/size.module#SizeModule"
          },
          {
            path: "company",
            loadChildren: "~/app/settings/company/company.module#CompanyModule"
          },
          {
            path: "color",
            loadChildren: "~/app/settings/color/color.module#ColorModule"
          },
          {
            path: "product",
            loadChildren: "~/app/settings/product/product.module#ProductModule"
          }
    ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
