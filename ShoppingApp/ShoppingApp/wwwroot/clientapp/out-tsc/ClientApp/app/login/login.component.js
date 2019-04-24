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
    Login.prototype.onLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.login(this.creds)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            if (this.dataService.order.items.length == 0) {
                                this.router.navigate([""]);
                            }
                            else {
                                this.router.navigate(["checkout"]);
                            }
                        }
                        else {
                            this.errorMessage = "Failed to login";
                        }
                        return [2 /*return*/];
                }
            });
        });
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