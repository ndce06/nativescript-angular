export interface IColor {
  id: string;
  name: string;
}

export class Color implements IColor {
  id: string;
  name: string;

  constructor(params?: IColor) {
    if (params) {
      this.id = params.id;
      this.name = params.name;
    }
  }
}
