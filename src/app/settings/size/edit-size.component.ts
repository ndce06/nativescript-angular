import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISize, Size } from "~/app/interface";
import { RouterExtensions } from "nativescript-angular/router";
import { SizeService } from "~/app/services";
import { ToastService } from "~/app/common/toast.service";

@Component({
    moduleId: module.id,
    selector: "edit-size",
    templateUrl: "edit-size.component.html",
    providers: [SizeService]
})
export class EditSizeComponent {
    private _size: Size;

    constructor(
        private routerExtension: RouterExtensions,
        private route: ActivatedRoute,
        private sizeService: SizeService,
        private toastService: ToastService
    ) {
        this._size = new Size();
        this.route.queryParams.subscribe(params => {
            if (params && params.id) {
                this._size = new Size(params as ISize);
            }
        });
    }

    goBack() {
        this.routerExtension.backToPreviousPage();
    }

    save() {
        this.sizeService.saveSize(this.size).then(size => {
            this.goBack();
            this.toastService.showMessage("Size saved!!");
        });
    }

    get size(): Size {
        return this._size;
    }

    set size(value: Size) {
        this._size = value;
    }
}
