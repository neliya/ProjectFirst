import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
var Checkout = /** @class */ (function () {
    function Checkout(data, router) {
        var _this = this;
        this.data = data;
        this.router = router;
        this.isLikeButton = false;
        this.errorMessage = "";
        this.quantity = 1;
        this.addScript = false;
        this.paypalLoad = true;
        this.finalAmount = 1;
        this.paypalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'AbySzvPZfn-aZnNvXy-iGaxiN3bJIHY-wrr7L3PxYlAyMVoN9MxVDS8aMuKwrJ6z3_iUmoc84jGeSMG7',
                production: '<production-id>'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.finalAmount, currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                });
            }
        };
    }
    Checkout.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                _this.paypalLoad = false;
            });
        }
    };
    Checkout.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scriptTagElement = document.createElement('script');
            scriptTagElement.src = "https://www.paypalobjects.com/api/checkout.js";
            scriptTagElement.onload = resolve;
            document.body.appendChild(scriptTagElement);
        });
    };
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order"; });
    };
    Checkout.prototype.likeButton = function (y) {
        this.isLikeButton = !this.isLikeButton;
    };
    Checkout.prototype.plusButton = function (id) {
        this.quantity++;
    };
    Checkout.prototype.minusButton = function () {
        this.quantity--;
    };
    Checkout = tslib_1.__decorate([
        Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ["checkout.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Checkout);
    return Checkout;
}());
export { Checkout };
//# sourceMappingURL=checkout.component.js.map