(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Product List';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/productList.component */ "./app/shop/productList.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shop_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop/cart.component */ "./app/shop/cart.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./app/login/login.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shop/shop.component */ "./app/shop/shop.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkout/checkout.component */ "./app/checkout/checkout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");















var routes = [
    { path: "", component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["Shop"] },
    { path: "checkout", component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["Checkout"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["Login"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shop_productList_component__WEBPACK_IMPORTED_MODULE_4__["ProductList"],
                _shop_cart_component__WEBPACK_IMPORTED_MODULE_7__["Cart"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_10__["Shop"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_11__["Checkout"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["Login"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                //material
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            providers: [
                _shared_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/checkout/checkout.component.css":
/*!*********************************************!*\
  !*** ./app/checkout/checkout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb{\r\n    max-width: 100px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntr.example-detail-row {\r\n    height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n    background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n    border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n    overflow: hidden;\r\n    display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n    padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n    opacity: 0.5;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0;\r\n    background-color: #7EC855;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.shopping-cart {\r\n    width: 750px;\r\n    height: 184px;\r\n    margin-left: 263px;\r\n    margin-bottom: 0px;\r\n    background: #FFFFFF;\r\n    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);\r\n    border-radius: 6px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.title {\r\n    height: 60px;\r\n    border-bottom: 1px solid #E1E8EE;\r\n    padding: 20px 30px;\r\n    color: #5E6977;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n}\r\n\r\n.item {\r\n    padding: 20px 30px;\r\n    height: 120px;\r\n    display: flex;\r\n}\r\n\r\n.item:nth-child(3) {\r\n        border-top: 1px solid #E1E8EE;\r\n        border-bottom: 1px solid #E1E8EE;\r\n    }\r\n\r\n.buttons {\r\n    position: relative;\r\n    padding-top: 30px;\r\n    margin-right: 60px;\r\n}\r\n\r\n.delete-btn,\r\n.like-btn {\r\n    display: inline-block;\r\n    Cursor: pointer;\r\n}\r\n\r\n.delete-btn {\r\n    width: 18px;\r\n    height: 17px;\r\n    background: url('/delete-icn.svg') no-repeat center;\r\n}\r\n\r\n.like-btn {\r\n    position: absolute;\r\n    top: 9px;\r\n    left: 15px;\r\n    background: url('/img/twitter-heart.png');\r\n    width: 60px;\r\n    height: 60px;\r\n    background-size: 2900%;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.is-active {\r\n    -webkit-animation-name: animate;\r\n            animation-name: animate;\r\n    -webkit-animation-duration: .8s;\r\n            animation-duration: .8s;\r\n    -webkit-animation-iteration-count: 1;\r\n            animation-iteration-count: 1;\r\n    -webkit-animation-timing-function: steps(28);\r\n            animation-timing-function: steps(28);\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n    0% {\r\n        background-position: left;\r\n    }\r\n\r\n    50% {\r\n        background-position: right;\r\n    }\r\n\r\n    100% {\r\n        background-position: right;\r\n    }\r\n}\r\n\r\n@keyframes animate {\r\n    0% {\r\n        background-position: left;\r\n    }\r\n\r\n    50% {\r\n        background-position: right;\r\n    }\r\n\r\n    100% {\r\n        background-position: right;\r\n    }\r\n}\r\n\r\n.image {\r\n    margin-right: 50px;\r\n}\r\n\r\n.description {\r\n    padding-top: 10px;\r\n    margin-right: 60px;\r\n    width: 115px;\r\n}\r\n\r\n.description span {\r\n    display: block;\r\n    font-size: 14px;\r\n    color: #43484D;\r\n    font-weight: 400;\r\n}\r\n\r\n.description span:first-child {\r\n        margin-bottom: 5px;\r\n    }\r\n\r\n.description span:last-child {\r\n        font-weight: 300;\r\n        margin-top: 8px;\r\n        color: #86939E;\r\n    }\r\n\r\n.quantity {\r\n    padding-top: 20px;\r\n    margin-right: 60px;\r\n}\r\n\r\n.quantity input {\r\n        -webkit-appearance: none;\r\n        border: none;\r\n        text-align: center;\r\n        width: 32px;\r\n        font-size: 16px;\r\n        color: #43484D;\r\n        font-weight: 300;\r\n    }\r\n\r\nbutton[class*=btn] {\r\n    width: 30px;\r\n    height: 30px;\r\n    background-color: #E1E8EE;\r\n    border-radius: 6px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.minus-btn img {\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.plus-btn img {\r\n    margin-top: 2px;\r\n}\r\n\r\nbutton:focus,\r\ninput:focus {\r\n    outline: 0;\r\n}\r\n\r\n.total-price {\r\n    width: 83px;\r\n    padding-top: 27px;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    color: #43484D;\r\n    font-weight: 300;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .shopping-cart {\r\n        width: 100%;\r\n        height: auto;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .item {\r\n        height: auto;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n    }\r\n\r\n    .image img {\r\n        width: 50%;\r\n    }\r\n\r\n    .image,\r\n    .quantity,\r\n    .description {\r\n        width: 100%;\r\n        text-align: center;\r\n        margin: 6px 0;\r\n    }\r\n\r\n    .buttons {\r\n        margin-right: 20px;\r\n    }\r\n}\r\n\r\n.checkout {\r\n    margin-left: 850px;\r\n    border: 0;\r\n    margin-top: 20px;\r\n    padding: 6px 25px;\r\n    background-color: #6b6;\r\n    color: #fff;\r\n    font-size: 25px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.checkout:hover {\r\n        background-color: #494;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULHlCQUF5QjtJQUN6QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVJO1FBQ0ksNkJBQTZCO1FBQzdCLGdDQUFnQztJQUNwQzs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVix5Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxxQ0FBNkI7WUFBN0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7QUFDSjs7QUFaQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUk7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0FBRUo7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVJO1FBQ0ksd0JBQXdCO1FBQ3hCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCOztBQUVKO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTs7O1FBR0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVJO1FBQ0ksc0JBQXNCO0lBQzFCIiwiZmlsZSI6ImFwcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrb3V0LXRodW1ie1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RUM4NTU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zaG9wcGluZy1jYXJ0IHtcclxuICAgIHdpZHRoOiA3NTBweDtcclxuICAgIGhlaWdodDogMTg0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjYzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udGl0bGUge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMUU4RUU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICBjb2xvcjogIzVFNjk3NztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4gICAgLml0ZW06bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRThFRTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0UxRThFRTtcclxuICAgIH1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0bixcclxuLmxpa2UtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIEN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwofi9kZWxldGUtaWNuLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcclxufVxyXG5cclxuLmxpa2UtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCh+L2ltZy90d2l0dGVyLWhlYXJ0LnBuZyk7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjkwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaXMtYWN0aXZlIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRlO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuOHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogc3RlcHMoMjgpO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0MzQ4NEQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24gc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBjb2xvcjogIzg2OTM5RTtcclxuICAgIH1cclxuXHJcbi5xdWFudGl0eSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG5cclxuICAgIC5xdWFudGl0eSBpbnB1dCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDM0ODREO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG5idXR0b25bY2xhc3MqPWJ0bl0ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFOEVFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWludXMtYnRuIGltZyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5wbHVzLWJ0biBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG5idXR0b246Zm9jdXMsXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi50b3RhbC1wcmljZSB7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIHBhZGRpbmctdG9wOiAyN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM0MzQ4NEQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5zaG9wcGluZy1jYXJ0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbSB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZSxcclxuICAgIC5xdWFudGl0eSxcclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNoZWNrb3V0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NTBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuICAgIC5jaGVja291dDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./app/checkout/checkout.component.html":
/*!**********************************************!*\
  !*** ./app/checkout/checkout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{errorMessage}}</div>\r\n<!-- Title -->\r\n<div class=\"title\">\r\n    Shopping Bag\r\n</div>\r\n<div class=\"shopping-cart\" *ngFor=\"let o of data.order.items\">\r\n\r\n    <!-- Product #1 -->\r\n    <div class=\"item\">\r\n        <div class=\"buttons\">\r\n            <span class=\"delete-btn\" (click)=\"delete(o)\"></span>\r\n        </div>\r\n\r\n        <div class=\"image\">\r\n            <img src=\"/img/{{o.productId}}.jpg\" alt=\"\" style=\"width: 181px;height: 147px;\"/>\r\n        </div>\r\n\r\n        <div class=\"description\">\r\n            <span>{{o.productCategory}} {{o.productSize}}</span>\r\n            <span>{{o.quantity}}</span>\r\n            <span>{{o.unitPrice | currency: 'USD':true }}</span>\r\n            <span>{{o.unitPrice * o.quantity | currency: 'USD':true}}</span>\r\n        </div>\r\n\r\n        <div class=\"quantity\">\r\n            <button class=\"plus-btn\" type=\"button\" name=\"button\" (click)=\"plusButton(o)\">\r\n                <img src=\"../plus.svg\" alt=\"\" />\r\n            </button>\r\n            <input type=\"text\" [(ngModel)]=\"o.quantity\" >\r\n            <button class=\"minus-btn\" type=\"button\" name=\"button\" (click)=\"minusButton()\" >\r\n                <img src=\"../minus.svg\" alt=\"\" />\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"total-price\">{{ data.order.subTotal | currency: 'USD' : true}}</div>\r\n    </div>\r\n</div>\r\n<button id=\"paypal-checkout-btn\" style=\"margin-left: 850px;\"></button>\r\n\r\n\r\n"

/***/ }),

/***/ "./app/checkout/checkout.component.ts":
/*!********************************************!*\
  !*** ./app/checkout/checkout.component.ts ***!
  \********************************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




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
    Checkout.prototype.delete = function (product) {
        var deleteProduct = this.data.products.findIndex(product.productId);
    };
    Checkout.prototype.plusButton = function (product) {
        product.quantity++;
    };
    Checkout.prototype.minusButton = function (product) {
        product.quantity--;
    };
    Checkout = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./app/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Checkout);
    return Checkout;
}());



/***/ }),

/***/ "./app/login/login.component.html":
/*!****************************************!*\
  !*** ./app/login/login.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"    margin-left: 414px;\">\r\n    <div class=\"col-md-8 \">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{errorMessage}}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username </label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required/>\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\" >Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password </label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\"/>\r\n                <a routerLink=\"/\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/login/login.component.ts":
/*!**************************************!*\
  !*** ./app/login/login.component.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




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
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "login",
            template: __webpack_require__(/*! ./login.component.html */ "./app/login/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./app/shared/dataService.ts":
/*!***********************************!*\
  !*** ./app/shared/dataService.ts ***!
  \***********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order */ "./app/shared/order.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");





var DataService = /** @class */ (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.token = "";
        this.products = [];
        this.order = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        this.loadProducts = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
        this.loadCart = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var headers, response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                        headers.set('Authorization', 'Bearer ' + this.token);
                        return [4 /*yield*/, this.http.get("/api/get-cart", { headers: headers }).toPromise()];
                    case 1:
                        response = _a.sent();
                        debugger;
                        if (response != null) {
                            this.products = response;
                        }
                        return [2 /*return*/, true];
                }
            });
        }); };
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        //loadProducts(): Observable<boolean> {
        //    return this.http.get("api/products")
        //        .pipe(map((data: any[]) => {
        //            this.products = data;
        //            return true;
        //        }));
        //}
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.token = data.token;
            _this.tokenExpiration = data.expiration;
            return true;
        }));
    };
    //    login = async (creds: any): Promise<boolean> => {
    //    var response = await this.http.post("/account/createtoken", creds).toPromise();
    //    if (response != null) {
    //        this.token = response['token'];
    //        this.tokenExpiration = response['expiration'];
    //    }
    //    return true;
    //}
    DataService.prototype.AddToOrder = function (newProduct) {
        var item = this.order.items.find(function (i) { return i.productId == newProduct.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new _order__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
            item.productId = newProduct.id;
            item.productCategory = newProduct.category;
            item.productTitle = newProduct.title;
            item.productSize = newProduct.size;
            item.unitPrice = newProduct.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        return this.http.post("api/orders", this.order)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resposne) {
            _this.order = new _order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
            return true;
        }));
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/shared/order.ts":
/*!*****************************!*\
  !*** ./app/shared/order.ts ***!
  \*****************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["round"](lodash__WEBPACK_IMPORTED_MODULE_0__["sum"](lodash__WEBPACK_IMPORTED_MODULE_0__["map"](this.items, function (i) { return i.unitPrice * i.quantity; })), 2);
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./app/shop/cart.component.html":
/*!**************************************!*\
  !*** ./app/shop/cart.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{data.order.items.length}}</div>\r\n<div>Subtotal: {{data.order.subtotal | currency:\"USD\":true}}</div>\r\n<table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{o.productCategory}} - {{o.productTitle}} </td>\r\n            <td>{{o.quantity}}</td>\r\n            <td>{{o.unitPrice | currency:\"USD\":true }}</td>\r\n            <td>{{ (o.unitPrice * o.quantity) | currency:\"USD\":true }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>"

/***/ }),

/***/ "./app/shop/cart.component.ts":
/*!************************************!*\
  !*** ./app/shop/cart.component.ts ***!
  \************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var Cart = /** @class */ (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    };
    Cart = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./app/shop/cart.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "./app/shop/productList.component.css":
/*!********************************************!*\
  !*** ./app/shop/productList.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info img{\r\n    float:left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n\r\n.product-info .product-name{\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.section .section-heading {\r\n    margin-top: 2rem;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n.section-heading {\r\n    text-align: center;\r\n}\r\n\r\n.section-description {\r\n    margin-left: 5%;\r\n    margin-right: 5%;\r\n}\r\n\r\n.section-description {\r\n    color: #757575;\r\n    margin-bottom: 4rem;\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n    text-align: center;\r\n}\r\n\r\n.section img {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.card.card-cascade.narrower {\r\n    margin-top: 10px;\r\n}\r\n\r\n.card.card-cascade {\r\n    width: 100%;\r\n}\r\n\r\n.card:not([class*=\"card-outline-\"]) {\r\n    border: 0;\r\n}\r\n\r\n.card.card-cascade.narrower .view {\r\n    margin-left: 4%;\r\n    margin-right: 4%;\r\n    margin-top: -20px;\r\n}\r\n\r\n.card.card-cascade .view {\r\n    border-radius: 4px;\r\n}\r\n\r\n.btn-floating:hover,\r\n.card-overlay,\r\n.card.card-cascade .view,\r\n.colorful-select .dropdown-content li a:hover,\r\n.colorful-select .dropdown-content li span:hover,\r\n.comments-list img,\r\n.modal-dialog.cascading-modal.modal-avatar .modal-header img,\r\n.reply-form img,\r\n.testimonial-carousel .testimonial .avatar img,\r\n.z-depth-2 {\r\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.card.card-cascade .card-body {\r\n    padding-top: 1.8rem;\r\n}\r\n\r\n.btn .fa,\r\n.card .card-body {\r\n    position: relative;\r\n}\r\n\r\n.card .rating {\r\n    color: #ffa000;\r\n}\r\n\r\n.rating {\r\n    list-style-type: none;\r\n}\r\n\r\n.no-padding .fa,\r\n.rating {\r\n    padding: 0;\r\n}\r\n\r\n.rating li {\r\n        display: inline-block;\r\n    }\r\n\r\n.no-padding .fa,\r\n.rating {\r\n    padding: 0;\r\n}\r\n\r\n.card-text {\r\n    line-height: 20px;\r\n    height: 60px;\r\n    overflow: hidden;\r\n}\r\n\r\n.card .card-footer {\r\n    background-color: transparent;\r\n}\r\n\r\n.card .card-footer .left {\r\n        float: left;\r\n    }\r\n\r\n.card .card-footer .right {\r\n        float: right;\r\n        display: flex;\r\n    }\r\n\r\n.card .card-footer .right a.active {\r\n            color: #d50000;\r\n        }\r\n\r\n.card .card-footer .right a {\r\n            color: #757575;\r\n            margin-left: 1rem;\r\n            transition: 0.4s;\r\n        }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaG9wL3Byb2R1Y3RMaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7Ozs7O0lBV0ksNkVBQTZFO0FBQ2pGOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVJO1FBQ0kscUJBQXFCO0lBQ3pCOztBQUVKOztJQUVJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVJO1FBQ0ksV0FBVztJQUNmOztBQUVBO1FBQ0ksWUFBWTtRQUlaLGFBQWE7SUFDakI7O0FBRUk7WUFDSSxjQUFjO1FBQ2xCOztBQUVBO1lBQ0ksY0FBYztZQUNkLGlCQUFpQjtZQUVqQixnQkFBZ0I7UUFDcEIiLCJmaWxlIjoiYXBwL3Nob3AvcHJvZHVjdExpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWluZm8gaW1ne1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mbyAucHJvZHVjdC1uYW1le1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VjdGlvbiAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbiBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLWNhc2NhZGUubmFycm93ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1jYXNjYWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZDpub3QoW2NsYXNzKj1cImNhcmQtb3V0bGluZS1cIl0pIHtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1jYXNjYWRlLm5hcnJvd2VyIC52aWV3IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG5cclxuLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0bi1mbG9hdGluZzpob3ZlcixcclxuLmNhcmQtb3ZlcmxheSxcclxuLmNhcmQuY2FyZC1jYXNjYWRlIC52aWV3LFxyXG4uY29sb3JmdWwtc2VsZWN0IC5kcm9wZG93bi1jb250ZW50IGxpIGE6aG92ZXIsXHJcbi5jb2xvcmZ1bC1zZWxlY3QgLmRyb3Bkb3duLWNvbnRlbnQgbGkgc3Bhbjpob3ZlcixcclxuLmNvbW1lbnRzLWxpc3QgaW1nLFxyXG4ubW9kYWwtZGlhbG9nLmNhc2NhZGluZy1tb2RhbC5tb2RhbC1hdmF0YXIgLm1vZGFsLWhlYWRlciBpbWcsXHJcbi5yZXBseS1mb3JtIGltZyxcclxuLnRlc3RpbW9uaWFsLWNhcm91c2VsIC50ZXN0aW1vbmlhbCAuYXZhdGFyIGltZyxcclxuLnotZGVwdGgtMiB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTdweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQtY2FzY2FkZSAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiAxLjhyZW07XHJcbn1cclxuXHJcbi5idG4gLmZhLFxyXG4uY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQgLnJhdGluZyB7XHJcbiAgICBjb2xvcjogI2ZmYTAwMDtcclxufVxyXG5cclxuLnJhdGluZyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5uby1wYWRkaW5nIC5mYSxcclxuLnJhdGluZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4gICAgLnJhdGluZyBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuLm5vLXBhZGRpbmcgLmZhLFxyXG4ucmF0aW5nIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiAgICAuY2FyZCAuY2FyZC1mb290ZXIgLmxlZnQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIC5jYXJkLWZvb3RlciAucmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgLmNhcmQtZm9vdGVyIC5yaWdodCBhLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDUwMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgLmNhcmQtZm9vdGVyIC5yaWdodCBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./app/shop/productList.component.html":
/*!*********************************************!*\
  !*** ./app/shop/productList.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"card_one col-md-3 \" *ngFor=\"let p of products\" style=\"padding: 0px;margin: 9px;margin-bottom:50px;\">\r\n        <img src=\"/img/{{p.id}}.jpg\" alt=\"Denim Jeans\" style=\"width:100%; height: 294px;\">\r\n        <h6> {{p.title}}</h6>\r\n        <p class=\"price\"> {{p.price | currency:\"USD\":true}}</p>\r\n        <p>{{p.description}}</p>\r\n        <p> <button id=\"buyButton\" class=\"btn btn-primary\" (click)=\"addProduct(p)\">Buy</button></p>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./app/shop/productList.component.ts":
/*!*******************************************!*\
  !*** ./app/shop/productList.component.ts ***!
  \*******************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dataService */ "./app/shared/dataService.ts");



var ProductList = /** @class */ (function () {
    function ProductList(dataService) {
        this.dataService = dataService;
        this.products = [];
    }
    ProductList.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.loadProducts()];
                    case 1:
                        _a.sent();
                        this.products = this.dataService.products;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.dataService.AddToOrder(product);
    };
    ProductList = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-list",
            template: __webpack_require__(/*! ./productList.component.html */ "./app/shop/productList.component.html"),
            styles: [__webpack_require__(/*! ./productList.component.css */ "./app/shop/productList.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_dataService__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "./app/shop/shop.component.html":
/*!**************************************!*\
  !*** ./app/shop/shop.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{title}}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"card bg-light p-2\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/shop/shop.component.ts":
/*!************************************!*\
  !*** ./app/shop/shop.component.ts ***!
  \************************************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "the-shop",
            template: __webpack_require__(/*! ./shop.component.html */ "./app/shop/shop.component.html")
        })
    ], Shop);
    return Shop;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\neliya.gurung\source\repos\ShoppingApp\ShoppingApp\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map