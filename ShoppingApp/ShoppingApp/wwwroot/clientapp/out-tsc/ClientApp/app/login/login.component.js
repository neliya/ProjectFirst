import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from "@angular/router";
var Login = /** @class */ (function () {
    function Login(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            username: "",
            password: ""
        };
    }
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
    Login.prototype.onLogin = function () {
        var _this = this;
        //Call the login Service
        this.dataService.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                if (_this.dataService.order.items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    Login = tslib_1.__decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html",
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map