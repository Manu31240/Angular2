"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu/menu.component");
var product_component_1 = require("./product/product.component");
var footer_component_1 = require("./footer/footer.component");
var home_component_1 = require("./home/home.component");
var basket_component_1 = require("./basket/basket.component");
var sort_pipe_1 = require("./pipes/sort.pipe");
var product_service_1 = require("./services/product.service");
var customer_service_1 = require("./services/customer.service");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'basket', component: basket_component_1.BasketComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                product_component_1.ProductComponent,
                footer_component_1.FooterComponent,
                basket_component_1.BasketComponent,
                home_component_1.HomeComponent,
                sort_pipe_1.SortPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes),
                http_1.HttpModule
            ],
            providers: [
                product_service_1.ProductService,
                customer_service_1.CustomerService,
                common_1.UpperCasePipe,
                { provide: 'welcomeMsg', useValue: 'Bienvenue sur Zenika Ecommerce' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
