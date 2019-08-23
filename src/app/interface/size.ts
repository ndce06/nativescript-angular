export interface ISize {
  id: string;
  name: string;
  unit: string;
}

export class Size implements ISize {
  id: string;
  name: string;
  unit: string;

  constructor(params?: ISize) {
    if (params) {
      this.id = params.id;
      this.name = params.name;
      this.unit = params.unit;
    }
  }
}
