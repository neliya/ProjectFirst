﻿import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: "login.component.html",
})
export class Login {


    constructor(private dataService: DataService, private router: Router ) {
    }
    errorMessage: string = "";
    public creds = {
        username: "",
        password: ""
    };


    //async onLogin(): Promise<any> {
    //    var result = await this.dataService.login(this.creds).toPromise();
    //    if (result.) {
    //        if (this.dataService.order.items.length == 0) {
    //            this.router.navigate([""]);
    //        } else {
    //            this.router.navigate(["checkout"]);
    //        }
    //    }
    //}

    onLogin() {
        //Call the login Service
        this.dataService.login(this.creds)
            .subscribe(success => {
                if (success) {
                    if (this.dataService.order.items.length == 0) {
                        this.router.navigate([""]);
                    } else {
                        this.router.navigate(["checkout"]);
                    }
                }
            }, err => this.errorMessage = "Failed to login")
    }


}