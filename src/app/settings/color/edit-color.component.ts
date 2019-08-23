import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IColor, Color } from "~/app/interface";
import { RouterExtensions } from "nativescript-angular/router";
import { ColorService } from "~/app/services";

@Component({
  moduleId: module.id,
  selector: "edit-color",
  templateUrl: "edit-color.component.html",
  providers: [ColorService]
})
export class EditColorComponent {
  private _color: Color;

  constructor(
    private routerExtension: RouterExtensions,
    private route: ActivatedRoute,
    private colorService: ColorService
  ) {
    this._color = new Color();
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        this._color = new Color(params as IColor);
      }
    });
  }

  goBack() {
    this.routerExtension.backToPreviousPage();
  }

  save() {
    this.colorService.saveColor(this.color).then(color => {
      this.goBack();
    });
  }

  get color(): Color {
    return this._color;
  }

  set color(value: Color) {
    this._color = value;
  }
}
