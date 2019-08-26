import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { filterPipe } from "./filter.pipe";
import { ToastService } from "./toast.service";

@NgModule({
    imports: [NativeScriptFormsModule],
    exports: [filterPipe],
    declarations: [filterPipe],
    providers: [ToastService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CommonModule {}
