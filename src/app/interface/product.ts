export interface IProduct {
  id: string;
  name: string;
  companyId: string;
  lowStockAlert: number;
}

export class Product implements IProduct {
  id: string;
  name: string;
  companyId: string;
  lowStockAlert: number;

  constructor(params?: IProduct) {
    if (params) {
      this.id = params.id;
      this.name = params.name;
      this.companyId = params.companyId;
      this.lowStockAlert = params.lowStockAlert;
    }
  }
}
