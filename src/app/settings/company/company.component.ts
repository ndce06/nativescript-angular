import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as app from "tns-core-modules/application";
import { CompanyService } from "../../services";
import { ICompany } from "../../interface";

@Component({
  selector: "company-settings",
  moduleId: module.id,
  templateUrl: "./company.component.html",
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  private companyList: Array<ICompany>;
  private searchText: string;
  private searchBarHint: string = "Search...";
  constructor(
    private companyService: CompanyService,
    private routerExtension: RouterExtensions
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.companyService.getCompanyList().then(res => {
      this.companyList = res;
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

  public editItem(item: ICompany) {
    const navigationExtras: NavigationExtras = {
      queryParams: { ...item }
    };
    this.routerExtension.navigate(["/settings/company/edit"], navigationExtras);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
