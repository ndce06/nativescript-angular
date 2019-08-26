import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICompany } from "../interface";

@Injectable({ providedIn: "root" })
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompanyList(): Promise<Array<ICompany>> {
    let companies: ICompany[] = [
      {
        id: "1",
        name: "Atalas"
      },
      {
        id: "2",
        name: "Hero"
      },
      {
        id: "3",
        name: "Herculas (TI)"
      },
      {
        id: "4",
        name: "Sachin"
      }
    ];

    return Promise.resolve(companies);
  }

  saveCompany(Company: ICompany): Promise<ICompany> {
    return Promise.resolve(Company);
  }
}
