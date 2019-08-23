import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IColor } from "../interface";

@Injectable({ providedIn: "root" })
export class ColorService {
  constructor(private http: HttpClient) {}

  getColorList(): Promise<Array<IColor>> {
    let colors: IColor[] = [
      {
        id: "1",
        name: "red"
      },
      {
        id: "2",
        name: "black"
      },
      {
        id: "3",
        name: "silver"
      }
    ];

    return Promise.resolve(colors);
  }

  saveColor(color: IColor): Promise<IColor> {
    return Promise.resolve(color);
  }
}
