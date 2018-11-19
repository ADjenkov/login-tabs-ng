import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";

export const COMPONENTS = [LoginComponent, MainComponent];

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "main", component: MainComponent
    },
    {
        path: "home",
        loadChildren: "./app/tabs/tabs.module#TabsModule"
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule { }
