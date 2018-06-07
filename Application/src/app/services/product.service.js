"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var product_1 = require("../model/product");
var ProductService = /** @class */ (function () {
    function ProductService(uppercase, http) {
        this.uppercase = uppercase;
        this.http = http;
        this.API_URL = "http://localhost:8080/rest/";
    }
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get(this.API_URL + 'products')
            .map(function (res) { return res.json(); })
            .map(function (products) {
            return products.map(function (product) { return new product_1.Product(product.title, product.description, product.photo, product.price, product.stock); });
        })
            .map(function (products) {
            return products.map(function (product) {
                product.title = _this.uppercase.transform(product.title);
                return product;
            });
        })
            .do(function (products) { return _this.products = products; });
    };
    ProductService.prototype.isTheLast = function (title) {
        return this.products.find(function (product) { return product.title === title; }).stock === 1;
    };
    ProductService.prototype.isAvailable = function (title) {
        return this.products.find(function (product) { return product.title === title; }).stock !== 0;
    };
    ProductService.prototype.decreaseStock = function (title) {
        this.products.find(function (product) { return product.title === title; }).stock -= 1;
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
