import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SizeService } from "./size.service";
import { ColorService } from "./color.service";
import { CompanyService } from "./company.service";
import { ProductService } from "./product.service";

@Injectable({ providedIn: "root" })
export class FacadeService {
  constructor(
    private http: HttpClient,
    public sizeService: SizeService,
    public colorSerive: ColorService,
    public companySerive: CompanyService,
    public productService: ProductService
  ) {}
}
