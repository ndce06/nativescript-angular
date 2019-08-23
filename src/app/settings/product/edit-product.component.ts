import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct, Product } from "~/app/interface";
import { RouterExtensions } from "nativescript-angular/router";
import { ProductService } from "~/app/services";

@Component({
  moduleId: module.id,
  selector: "edit-product",
  templateUrl: "edit-product.component.html",
  providers: [ProductService]
})
export class EditProductComponent {
  private _product: Product;

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
