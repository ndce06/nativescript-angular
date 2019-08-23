import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as app from "tns-core-modules/application";
import { SizeService } from "../services";
import { ISize } from "../interface";

@Component({
  selector: "Settings",
  moduleId: module.id,
  templateUrl: "./settings.component.html",
  providers: [SizeService]
})
export class SettingsComponent implements OnInit {
  private sizeList: Array<ISize>;
  private searchText: string;
  private searchBarHint: string = "Search...";
  constructor(private sizeService: SizeService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.sizeService.getSizeList().then(res => {
      this.sizeList = res;
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

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
