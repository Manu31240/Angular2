"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ApplicationPage = /** @class */ (function () {
    function ApplicationPage() {
    }
    ApplicationPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    ApplicationPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return ApplicationPage;
}());
exports.ApplicationPage = ApplicationPage;
