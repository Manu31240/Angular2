"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("protractor/globals");
var ApplicationPage = /** @class */ (function () {
    function ApplicationPage() {
    }
    ApplicationPage.prototype.navigateTo = function () {
        return globals_1.browser.get('/');
    };
    ApplicationPage.prototype.getParagraphText = function () {
        return globals_1.element(globals_1.by.css('app-root h1')).getText();
    };
    return ApplicationPage;
}());
exports.ApplicationPage = ApplicationPage;
