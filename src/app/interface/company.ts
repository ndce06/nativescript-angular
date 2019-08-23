export interface ICompany {
  id: string;
  name: string;
}

export class Company implements ICompany {
  id: string;
  name: string;

  constructor(params?: ICompany) {
    if (params) {
      this.id = params.id;
      this.name = params.name;
    }
  }
}
