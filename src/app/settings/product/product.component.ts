import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as app from "tns-core-modules/application";
import { ProductService } from "../../services";
import { IProduct } from "../../interface";

@Component({
  selector: "product-settings",
  moduleId: module.id,
  templateUrl: "./product.component.html",
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  private productList: Array<IProduct>;
  private searchText: string;
  private searchBarHint: string = "Search...";
  constructor(
    private productService: ProductService,
    private routerExtension: RouterExtensions
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.

    this.productService.getProductList().then(res => {
      this.productList = res;
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

  public editItem(item: IProduct) {
    const navigationExtras: NavigationExtras = {
      queryParams: { ...item }
    };
    this.routerExtension.navigate(["/settings/product/edit"], navigationExtras);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
