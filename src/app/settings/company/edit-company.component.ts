import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ICompany, Company } from "~/app/interface";
import { RouterExtensions } from "nativescript-angular/router";
import { CompanyService } from "~/app/services";

@Component({
  moduleId: module.id,
  selector: "edit-company",
  templateUrl: "edit-company.component.html",
  providers: [CompanyService]
})
export class EditCompanyComponent {
  private _company: Company;

  constructor(
    private routerExtension: RouterExtensions,
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {
    this._company = new Company();
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this._company = new Company(params as ICompany);
      }
    });
  }

  goBack() {
    this.routerExtension.backToPreviousPage();
  }

  save() {
    this.companyService.saveCompany(this.company).then(company => {
      this.goBack();
    });
  }

  get company(): Company {
    return this._company;
  }

  set company(value: Company) {
    this._company = value;
  }
}
