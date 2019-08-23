import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as app from "tns-core-modules/application";
import { ColorService } from "../../services";
import { IColor } from "../../interface";

@Component({
  selector: "color-settings",
  moduleId: module.id,
  templateUrl: "./color.component.html",
  providers: [ColorService]
})
export class ColorComponent implements OnInit {
  private colorList: Array<IColor>;
  private searchText: string;
  private searchBarHint: string = "Search...";
  constructor(
    private colorService: ColorService,
    private routerExtension: RouterExtensions
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.colorService.getColorList().then(res => {
      this.colorList = res;
    });
  }

  public onTextChange(args) {
    let searchBar = <SearchBar>args.object;
    this.searchText = searchBar.text.toLowerCase();
  }

  public onClear(args) {
    let searchBar = <SearchBar>args.object;
    searchBar.text = "";
    searchBar.hint = this.searchBarHint;
    this.searchText = "";
  }

  public editItem(item: IColor) {
    const navigationExtras: NavigationExtras = {
      queryParams: { ...item }
    };
    this.routerExtension.navigate(["/settings/color/edit"], navigationExtras);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
