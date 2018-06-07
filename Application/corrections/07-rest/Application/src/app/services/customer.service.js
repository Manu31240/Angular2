"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var product_1 = require("../model/product");
var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.API_URL = "http://localhost:8080/rest/";
        this.products = new Array();
    }
    CustomerService.prototype.getBasket = function () {
        var _this = this;
        return this.http.get(this.API_URL + 'basket')
            .map(function (res) { return res.json(); })
            .map(function (products) {
            return products.map(function (product) { return new product_1.Product(product.title, product.description, product.photo, product.price, product.stock); });
        })
            .do(function (products) { return _this.products = products; });
    };
    CustomerService.prototype.addProduct = function (product) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.set('Content-Type', 'application/json');
        return this.http.post(this.API_URL + 'basket', JSON.stringify(product), { headers: headers })
            .do(function (products) { return _this.products.push(product); });
    };
    CustomerService.prototype.getTotal = function () {
        return this.products.reduce(function (previous, next) { return previous + next.price; }, 0);
    };
    CustomerService = __decorate([
        core_1.Injectable()
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
