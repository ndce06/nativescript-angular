import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../interface";

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList(): Promise<Array<IProduct>> {
    let Products: IProduct[] = [];
    return Promise.resolve(Products);
  }

  saveProduct(Product: IProduct): Promise<IProduct> {
    return Promise.resolve(Product);
  }
}
