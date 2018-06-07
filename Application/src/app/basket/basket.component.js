"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_1 = require("../model/customer");
var BasketComponent = /** @class */ (function () {
    function BasketComponent(customerService, router) {
        var _this = this;
        this.customerService = customerService;
        this.router = router;
        customerService.getBasket().subscribe(function (products) { return _this.basket = products; });
        this.customer = new customer_1.Customer();
    }
    BasketComponent.prototype.checkout = function () {
        var _this = this;
        this.customerService.checkout(this.customer).subscribe(function (_) { return _this.router.navigate(['']); });
    };
    BasketComponent.prototype.ngOnInit = function () {
    };
    BasketComponent = __decorate([
        core_1.Component({
            selector: 'app-basket',
            templateUrl: './basket.component.html',
            styleUrls: ['./basket.component.css']
        })
    ], BasketComponent);
    return BasketComponent;
}());
exports.BasketComponent = BasketComponent;
