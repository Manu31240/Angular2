"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(productService, customerService, title) {
        var _this = this;
        this.productService = productService;
        this.customerService = customerService;
        this.title = title;
        this.productService.getProducts().subscribe(function (products) { return _this.products = products; });
        this.customerService.getBasket().subscribe();
    }
    AppComponent.prototype.getTotal = function () {
        return this.customerService.getTotal();
    };
    AppComponent.prototype.updatePrice = function (event) {
        var _this = this;
        this.customerService.addProduct(event).subscribe(function (_) {
            _this.productService.decreaseStock(event.title);
        });
    };
    AppComponent.prototype.isAvailable = function (title) {
        return this.productService.isAvailable(title);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __param(2, core_1.Inject('welcomeMsg'))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
