export enum TRANSACTION_TYPE {
  ADDED = "ADDED",
  REMOVED = "REMOVED"
}
export interface ITransaction {
  id: string;
  stockItemId: string;
  type: TRANSACTION_TYPE;
  qty: number;
  createdOn: Date;
  createdBy: string;
}

export class Transaction implements ITransaction {
  id: string;
  stockItemId: string;
  type: TRANSACTION_TYPE;
  qty: number;
  createdOn: Date = new Date();
  createdBy: string;

  constructor(params?: ITransaction) {
    if (params) {
      this.id = params.id;
      this.stockItemId = params.stockItemId;
      this.type = params.type;
      this.qty = params.qty;
      this.createdOn = params.createdOn;
      this.createdBy = params.createdBy;
    }
  }
}
