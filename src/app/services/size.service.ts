import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ISize } from "../interface";

@Injectable({ providedIn: "root" })
export class SizeService {
  constructor(private http: HttpClient) {}

  getSizeList(): Promise<Array<ISize>> {
    let sizes: ISize[] = [];
    let id = 1;
    for (let i = 12; i < 50; i = i + 2) {
      sizes.push({
        id: (id++).toString(),
        name: i.toString(),
        unit: "inch"
      });
    }
    return Promise.resolve(sizes);
  }

  saveSize(size: ISize): Promise<ISize> {
    return Promise.resolve(size);
  }
}
