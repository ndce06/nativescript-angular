import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ValueList } from "nativescript-drop-down";
import { IProduct, Product, ICompany } from "~/app/interface";
import { RouterExtensions } from "nativescript-angular/router";
import { ProductService } from "~/app/services";

@Component({
    moduleId: module.id,
    selector: "edit-product",
    templateUrl: "edit-product.component.html",
    providers: [ProductService]
})
export class EditProductComponent implements OnInit {
    private _product: Product;
    private companyList: Array<ICompany> = [];
  private companySource = new ValueList<string>([]);

    constructor(
        private routerExtension: RouterExtensions,
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
        this._product = new Product();
        this.route.queryParams.subscribe(params => {
            if (params && params.id) {
                this._product = new Product(params as IProduct);
            }
        });
    }

    ngOnInit() {
        this.loadCompanyList();
    }

    loadCompanyList() {
        this.productService.getCompanyList().then(res => {
            this.companyList = res;
          this.companySource = new ValueList<string>(this.companyList.map((c) => {
            return {
              value: c.id,
              display: c.name
            }
          }));
        });
    }

    goBack() {
        this.routerExtension.backToPreviousPage();
    }

    save() {
        this.productService.saveProduct(this.product).then(product => {
            this.goBack();
        });
    }

    get product(): Product {
        return this._product;
    }

    set product(value: Product) {
        this._product = value;
    }
}
