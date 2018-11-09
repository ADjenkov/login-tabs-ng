import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { DataService, DataItem } from "../data.service";
import { RouterExtensions } from "nativescript-angular/router";

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
@Component({
    selector: "ns-players",
    moduleId: module.id,
    templateUrl: "./players.component.html",
})
export class PlayerComponent implements OnInit {
    items: DataItem[];

    constructor(private modal: ModalDialogService, private itemService: DataService, private router: RouterExtensions, private vcRef: ViewContainerRef, ) { }

    ngOnInit(): void {
        this.items = this.itemService.getPlayers();
    }
}