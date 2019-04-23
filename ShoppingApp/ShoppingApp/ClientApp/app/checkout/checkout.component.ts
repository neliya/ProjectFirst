﻿import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';


@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class Checkout  {


    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


    constructor(public data: DataService) {
    }

    onCheckout() {
        alert("Checking out");
    }

    
}