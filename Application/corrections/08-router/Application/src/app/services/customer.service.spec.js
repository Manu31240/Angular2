"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var customer_service_1 = require("./customer.service");
describe('Service: Customer', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [customer_service_1.CustomerService]
        });
    });
    it('should ...', testing_1.inject([customer_service_1.CustomerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
