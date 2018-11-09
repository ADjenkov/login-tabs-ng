import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AboutComponent } from "./about/about.component";
import { PlayerComponent } from "./player/players.component";
import { PlayerDetailComponent } from "./player/player-detail.component";
import { TeamsComponent } from "./team/teams.component";
import { TeamDetailComponent } from "./team/team-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
    ],
    declarations: [
        AboutComponent,
        PlayerComponent,
        PlayerDetailComponent,
        TeamsComponent,
        TeamDetailComponent
    ],
    exports: [
        AboutComponent,
        PlayerComponent,
        PlayerDetailComponent,
        TeamsComponent,
        TeamDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class SharedModule { }