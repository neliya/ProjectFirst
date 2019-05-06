import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
var ProductList = /** @class */ (function () {
    function ProductList(dataService) {
        this.dataService = dataService;
        this.products = [];
        this.orders = [];
    }
    ProductList.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.loadProducts()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.dataService.loadOrders()];
                    case 2:
                        _a.sent();
                        this.products = this.dataService.products;
                        this.orders = this.dataService.orders;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.dataService.AddToOrder(product);
    };
    ProductList = tslib_1.__decorate([
        Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: ["productList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], ProductList);
    return ProductList;
}());
export { ProductList };
//# sourceMappingURL=productList.component.js.map