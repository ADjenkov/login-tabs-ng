import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "main-page",
    templateUrl: "./main.component.html"
})
export class MainComponent {
    constructor(private routerExtension: RouterExtensions) { };

    onLogout() {
        // Navigate to login page with clearHistory
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }
}
