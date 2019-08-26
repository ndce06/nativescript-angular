import { Component, OnInit } from "@angular/core";
import { NavigationExtras } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions, } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import * as app from "tns-core-modules/application";
import { SizeService } from "../../services";
import { ISize } from "../../interface";

@Component({
    selector: "Size",
    moduleId: module.id,
    templateUrl: "./size.component.html",
    providers: [SizeService]
})
export class SizeComponent implements OnInit {
    private sizeList: Array<ISize>;
    private searchText: string;
    private searchBarHint: string = 'Search...';
    constructor(private sizeService: SizeService, private routerExtension: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.

        this.sizeService.getSizeList()
            .then((res) => {
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

    public editItem(item: ISize) {
        const navigationExtras: NavigationExtras = {
            queryParams: { ...item }
        }
        this.routerExtension.navigate(['/settings/size/edit'], navigationExtras);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
