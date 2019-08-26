import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct, ICompany } from "../interface";
import { CompanyService } from "./company.service";

@Injectable({ providedIn: "root" })
export class ProductService {
  constructor(
    private http: HttpClient,
    private companyService: CompanyService
  ) {}

  getCompanyList(): Promise<ICompany[]> {
    return this.companyService.getCompanyList();
  }

  getProductList(): Promise<Array<IProduct>> {
    let Products: IProduct[] = [];
    return Promise.resolve(Products);
  }

  saveProduct(Product: IProduct): Promise<IProduct> {
    return Promise.resolve(Product);
  }
}
