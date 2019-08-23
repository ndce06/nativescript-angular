export interface IStockItem {
  id: string;
  productId: string;
  companyId: string;
  sizeId: string;
  colorId: string;
  currentStock: number;
}

export class StockItem implements IStockItem {
  id: string;
  productId: string;
  companyId: string;
  sizeId: string;
  colorId: string;
  currentStock: number = 0;

  constructor(params?: IStockItem) {
    if (params) {
      this.id = params.id;
      this.productId = params.productId;
      this.companyId = params.companyId;
      this.sizeId = params.sizeId;
      this.colorId = params.colorId;
      this.currentStock = params.currentStock;
    }
  }
}
