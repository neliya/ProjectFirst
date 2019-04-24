import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
var CardLoaderComponent = /** @class */ (function () {
    function CardLoaderComponent() {
    }
    CardLoaderComponent.prototype.ngOnInit = function () { };
    CardLoaderComponent.prototype.arrayOne = function (n) {
        return Array(n);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CardLoaderComponent.prototype, "loop", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CardLoaderComponent.prototype, "height", void 0);
    CardLoaderComponent = tslib_1.__decorate([
        Component({
            selector: "app-card-loader",
            templateUrl: "./card-loader.component.html",
            styleUrls: ["./card-loader.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CardLoaderComponent);
    return CardLoaderComponent;
}());
export { CardLoaderComponent };
//# sourceMappingURL=card-loader.component.js.map