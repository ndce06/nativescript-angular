import { Injectable } from "@angular/core";
//import * as Toast from "nativescript-toast";

@Injectable({
    providedIn: "root"
})
export class ToastService {
    constructor() {}

    showMessage(message: string, duration?: string) {
        //Toast.makeText(message, duration).show();
    }
}
