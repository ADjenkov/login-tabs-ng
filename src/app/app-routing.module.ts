import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";

export const COMPONENTS = [LoginComponent, AboutComponent];

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "home",
        loadChildren: "./app/tabs/tabs.module#TabsModule"
    },
    {
        path: "about", component: AboutComponent
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
