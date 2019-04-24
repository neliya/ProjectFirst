import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order, OrderItem } from "./order";
var DataService = /** @class */ (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.token = "";
        this.products = [];
        this.order = new Order();
        this.loadProducts = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get("/api/products").toPromise()];
                    case 1:
                        response = _a.sent();
                        if (response != null) {
                            this.products = response;
                        }
                        return [2 /*return*/, true];
                }
            });
        }); };
        this.login = function (creds) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post("/account/createtoken", creds).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (response != null) {
                            this.token = response['token'];
                            this.tokenExpiration = response['expiration'];
                        }
                        return [2 /*return*/, true];
                }
            });
        }); };
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.AddToOrder = function (newProduct) {
        var item = this.order.items.find(function (i) { return i.productId == newProduct.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItem();
            item.productId = newProduct.id;
            item.productCategory = newProduct.category;
            item.productTitle = newProduct.title;
            item.productSize = newProduct.size;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map