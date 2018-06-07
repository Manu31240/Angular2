"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, column) {
        if (value === void 0) { value = []; }
        return value.sort(function (p1, p2) {
            if (p1[column] > p2[column])
                return 1;
            else if (p1[column] < p2[column])
                return -1;
            else
                return 0;
        });
    };
    SortPipe = __decorate([
        core_1.Pipe({
            name: 'sort',
            pure: false
        })
    ], SortPipe);
    return SortPipe;
}());
exports.SortPipe = SortPipe;
