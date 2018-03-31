webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "navbar", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__picture_picture_component__ = __webpack_require__("./src/app/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__whoarewe_whoarewe_component__ = __webpack_require__("./src/app/whoarewe/whoarewe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_image_gallery__ = __webpack_require__("./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_image_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngx_image_gallery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__picture_picture_component__["a" /* PictureComponent */],
            __WEBPACK_IMPORTED_MODULE_11__whoarewe_whoarewe_component__["a" /* WhoareweComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12_ngx_image_gallery__["NgxImageGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_module__["a" /* HomeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__picture_picture_component__ = __webpack_require__("./src/app/picture/picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__whoarewe_whoarewe_component__ = __webpack_require__("./src/app/whoarewe/whoarewe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'pictures', component: __WEBPACK_IMPORTED_MODULE_5__picture_picture_component__["a" /* PictureComponent */] },
    { path: 'whoarewe', component: __WEBPACK_IMPORTED_MODULE_6__whoarewe_whoarewe_component__["a" /* WhoareweComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('../../assets/img/IMG_0258.JPG')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <h1 class=\"presentation-title\">Een dag in de hel</h1>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">De Parijs-Roubaix ervaring</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n    </div>\n    <div class=\"main\">\n        <app-components></app-components>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homecomponents_components_module__ = __webpack_require__("./src/app/homecomponents/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__homecomponents_components_module__["a" /* ComponentsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "./src/app/homecomponents/components.component.html":
/***/ (function(module, exports) {

module.exports = "<app-info></app-info>\n<app-partners></app-partners>\n<app-countdown></app-countdown>"

/***/ }),

/***/ "./src/app/homecomponents/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    return ComponentsComponent;
}());
ComponentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-components',
        template: __webpack_require__("./src/app/homecomponents/components.component.html"),
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object])
], ComponentsComponent);

var _a;
//# sourceMappingURL=components.component.js.map

/***/ }),

/***/ "./src/app/homecomponents/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_component__ = __webpack_require__("./src/app/homecomponents/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__info_info_component__ = __webpack_require__("./src/app/homecomponents/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_vertical_timeline__ = __webpack_require__("./node_modules/angular-vertical-timeline/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partners_partners_component__ = __webpack_require__("./src/app/homecomponents/partners/partners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__countdown_countdown_component__ = __webpack_require__("./src/app/homecomponents/countdown/countdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_countdown__ = __webpack_require__("./node_modules/ngx-countdown/bundles/ngx-countdown.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_countdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ngx_countdown__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"],
            __WEBPACK_IMPORTED_MODULE_8_angular_vertical_timeline__["a" /* VerticalTimelineModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_countdown__["CountdownModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_component__["a" /* ComponentsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__partners_partners_component__["a" /* PartnersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__countdown_countdown_component__["a" /* CountdownComponent */],
        ],
        entryComponents: [],
        exports: [__WEBPACK_IMPORTED_MODULE_6__components_component__["a" /* ComponentsComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "./src/app/homecomponents/countdown/countdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2 class=\"text-center\">De dag</h2>\n        </div>\n        <div class=\"row\">\n        <countdown [config]=\"config\">\n            <div class=\"time\">$!d!\n              <div class=\"label\">dagen</div>\n            </div>\n            <div class=\"time\">$!h!\n              <div class=\"label\">uren</div>\n            </div>\n            <div class=\"time\">$!m!\n              <div class=\"label\">minuten</div>\n            </div>\n            <div class=\"time\">$!s!\n              <div class=\"label\">seconden</div>\n            </div>\n        </countdown>\n      </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/homecomponents/countdown/countdown.component.scss":
/***/ (function(module, exports) {

module.exports = "/*      light colors - used for select dropdown         */\n.flip-cd .time {\n  border-radius: 5px;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  display: inline-block;\n  text-align: center;\n  position: relative;\n  height: 95px;\n  width: 65px;\n  -webkit-perspective: 479px;\n          perspective: 479px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n.flip-cd .count {\n  background: #202020;\n  color: #f8f8f8;\n  display: block;\n  font-family: 'Oswald', sans-serif;\n  font-size: 3.3em;\n  line-height: 2.4em;\n  overflow: hidden;\n  position: absolute;\n  text-align: center;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n  top: 0;\n  width: 100%;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-transform-style: flat;\n          transform-style: flat; }\n.flip-cd .count.top {\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 5px 5px 0 0;\n    height: 50%;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%; }\n.flip-cd .count.bottom {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(transparent));\n    background-image: linear-gradient(rgba(255, 255, 255, 0.1), transparent);\n    border-top: 1px solid #000;\n    border-bottom: 1px solid #000;\n    border-radius: 0 0 5px 5px;\n    line-height: 0;\n    height: 50%;\n    top: 50%;\n    -webkit-transform-origin: 50% 0;\n            transform-origin: 50% 0; }\n.flip-cd .count.curr.top {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    z-index: 3; }\n.flip-cd .count.next.bottom {\n    -webkit-transform: rotateX(90deg);\n            transform: rotateX(90deg);\n    z-index: 2; }\n.flip-cd .label {\n  font-size: normal;\n  margin-top: 5px;\n  display: block;\n  position: absolute;\n  top: 95px;\n  width: 100%; }\n.flip-cd .hand {\n  display: block;\n  height: 100%;\n  width: 100%;\n  margin: 0 !important; }\n.flip-cd .flip .count.curr.top {\n  -webkit-transition: all 250ms ease-in-out;\n  transition: all 250ms ease-in-out;\n  -webkit-transform: rotateX(-90deg);\n          transform: rotateX(-90deg); }\n.flip-cd .flip .count.next.bottom {\n  -webkit-transition: all 250ms ease-in-out 250ms;\n  transition: all 250ms ease-in-out 250ms;\n  -webkit-transform: rotateX(0deg);\n          transform: rotateX(0deg); }\n.row {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n@media screen and (min-width: 767px) {\n  countdown {\n    font-size: 12px; } }\n"

/***/ }),

/***/ "./src/app/homecomponents/countdown/countdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountdownComponent = (function () {
    function CountdownComponent() {
        this.PR2018 = new Date(2018, 3, 9, 7, 30);
        this.date = this.PR2018;
        this.config = {
            stopTime: this.date,
            className: 'flip-cd',
            repaint: function () {
                var me = this, content;
                me.hands.forEach(function (hand) {
                    if (hand.lastValue !== hand.value) {
                        content = '';
                        var cur = me.toDigitals(hand.value + 1, hand.bits).join(''), next = me.toDigitals(hand.value, hand.bits).join('');
                        hand.node.innerHTML = "\n                    <span class=\"count curr top\">" + cur + "</span>\n                    <span class=\"count next top\">" + next + "</span>\n                    <span class=\"count next bottom\">" + next + "</span>\n                    <span class=\"count curr bottom\">" + cur + "</span>\n                ";
                        hand.node.parentElement.className = 'time';
                        setTimeout(function () {
                            hand.node.parentElement.className = 'time flip';
                        });
                    }
                });
            },
        };
    }
    return CountdownComponent;
}());
CountdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-countdown',
        template: __webpack_require__("./src/app/homecomponents/countdown/countdown.component.html"),
        styles: [__webpack_require__("./src/app/homecomponents/countdown/countdown.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], CountdownComponent);

//# sourceMappingURL=countdown.component.js.map

/***/ }),

/***/ "./src/app/homecomponents/info/info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homecomponents/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-info\">\n  <div class=\"container\">\n      <div class=\"tim-title\">\n          <h2 class=\"text-center\">Algemene info</h2>\n      </div>\n      <vertical-timeline>\n          <vertical-timeline-card\n           [dateValue]=\"PR2018\"\n          [timeString]=\"'7:45'\">\n            <h4>Verwelkoming in Ganzendreef 2 te Lokeren</h4>\n            <p>In afwachting van iedereen zijn aanwezigheid is er een verwelkoming met bubbels en een hapje.</p>\n          </vertical-timeline-card>\n\n          <vertical-timeline-card\n          [dateValue]=\"PR2018\"\n         [timeString]=\"'8:30'\">\n           <h4>Stipt vertrek</h4>\n           <p>We vertrekken naar onze eerste stopplaats in Incy. Dit is de 2de kasseistrook op het parcours.</p>\n         </vertical-timeline-card>\n  \n\n\n        <vertical-timeline-card\n        [dateValue]=\"PR2018\"\n       [timeString]=\"'11:15'\">\n         <h4>Aankomst inIncy</h4>\n         <p>Hier nemen we een ontbijt. Het ontbijt is traditie gewijs spek met eieren.</p>\n       </vertical-timeline-card>\n\n\n\n      <vertical-timeline-card\n      [dateValue]=\"PR2018\"\n     [timeString]=\"'13:30'\">\n       <h4>Vertrek naar de 2de stop</h4>\n       <p>De 2de stopplaats is in de buurt van het bos van Wallers deze kan wijzigen afhankelijk van het parcours/weersomstandigheden.</p>\n     </vertical-timeline-card>\n\n\n\n    <vertical-timeline-card\n    [dateValue]=\"PR2018\"\n   [timeString]=\"'14:15'\">\n     <h4>Aankomst 2de stopplaats</h4>\n     <p>Aankomst op de 2de stopplaats jullie krijgen hier ook een versnapering om tijdens de korte wandeling naar het parcours op te eten.</p>\n   </vertical-timeline-card>\n\n\n\n  <vertical-timeline-card\n  [dateValue]=\"PR2018\"\n [timeString]=\"'15:15'\">\n   <h4>Aankomst op de Carrefour de l'arbre</h4>\n   <p>Op onze laatste stop staat normaal gezien ook een groot scherm en kan je hier de koers zien aankomen. Hier blijven we tevens supporteren tot de laatste renner daar is gepasseerd.</p>\n </vertical-timeline-card>\n\n\n<vertical-timeline-card\n[dateValue]=\"PR2018\"\n[timeString]=\"'17:15'\">\n <h4>Avondmaal</h4>\n <p>Dit jaar is het eten na de finish Frans getint.</p>\n</vertical-timeline-card>\n\n\n<vertical-timeline-card\n[dateValue]=\"PR2018\"\n[timeString]=\"'20:00'\">\n <h4>Terugreis naar Lokeren</h4>\n <p>Geen getreur want we zorgen nog voor de nodige animatie aan boord van de bus.</p>\n</vertical-timeline-card>\n\n\n<vertical-timeline-card\n[dateValue]=\"PR2018\"\n[timeString]=\"'21:00'\">\n <h4>Aankomst in Lokeren</h4>\n <p>Dan zit deze geweldige dag erop.</p>\n</vertical-timeline-card>\n</vertical-timeline>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/homecomponents/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoComponent = (function () {
    function InfoComponent() {
        this.PR2018 = new Date(2018, 3, 9);
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info',
        template: __webpack_require__("./src/app/homecomponents/info/info.component.html"),
        styles: [__webpack_require__("./src/app/homecomponents/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoComponent);

//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "./src/app/homecomponents/partners/partners.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homecomponents/partners/partners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <div class=\"container\">\n      <div class=\"tim-title\">\n          <h2 class=\"text-center\" >Partners</h2>\n      </div>\n\n      <div class=\"row\">\n          <div class=\"col-xs-6  col-sm-4 col-md-3 offset-md-1\">\n              <h4 class=\"text-center images-title\">De betere azalea</h4>\n              <img src=\"../../../assets/img/partners/De beter azalea.v1.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n          </div>\n          <div class=\"col-xs-6  col-sm-4 col-md-3 offset-md-1\">\n              <h4 class=\"text-center images-title\">De pretre</h4>\n              <img src=\"../../../assets/img/partners/De pretre.v1.png\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n          </div>\n          <div class=\"col-xs-6  col-sm-4 col-md-3 offset-md-1\">\n              <h4 class=\"text-center images-title\">De fijnproever</h4>\n              <img src=\"../../../assets/img/partners/De fijnproever.v1.png\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n          </div>\n          <div class=\"col-xs-6  col-sm-4 col-md-3 offset-md-1\">\n              <h4 class=\"text-center images-title\">Delerium Tremens</h4>\n              <img src=\"../../../assets/img/partners/delirium-tremens-logo.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n          </div>\n      </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/homecomponents/partners/partners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    return PartnersComponent;
}());
PartnersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-partners',
        template: __webpack_require__("./src/app/homecomponents/partners/partners.component.html"),
        styles: [__webpack_require__("./src/app/homecomponents/partners/partners.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PartnersComponent);

//# sourceMappingURL=partners.component.js.map

/***/ }),

/***/ "./src/app/picture/galleryconf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEMO_GALLERY_CONF_INLINE; });
/* unused harmony export DEMO_GALLERY_CONF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEMO_GALLERY_IMAGE; });
var DEMO_GALLERY_CONF_INLINE = {
    imageOffset: '0px',
    imagePointer: true,
    showDeleteControl: false,
    showCloseControl: false,
    showExtUrlControl: false,
    closeOnEsc: true,
    showImageTitle: false,
    inline: true,
    backdropColor: 'default'
};
var DEMO_GALLERY_CONF = {
    imageOffset: '0px',
    showDeleteControl: false,
    showCloseControl: true,
    showImageTitle: false,
    inline: false,
    backdropColor: 'rgba(13,13,14,0.85)'
};
// gallery images
var DEMO_GALLERY_IMAGE = [
    {
        url: "../../assets/img/pictures/2017/real/1-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/1-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/2-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/2-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/3-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/3-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/4-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/4-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/5-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/6-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/7-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/7-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/8-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/8-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/9-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/9-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/10-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/10-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/12-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/12-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/13-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/13-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/14-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/14-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/15-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/15-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/16-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/16-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/17-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/17-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/18-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/18-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/19-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/19-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/20-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/20-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/21-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/21-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/22-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/22-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/23-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/23-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/24-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/24-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/25-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/25-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/26-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/26-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/27-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/27-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/28-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/28-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/29-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/29-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/30-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/30-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/31-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/31-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/32-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/32-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/33-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/33-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/34-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/34-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/35-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/35-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/36-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/36-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/37-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/37-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/38-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/38-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/39-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/39-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/40-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/40-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/41-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/41-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/42-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/42-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/43-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/43-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/44-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/44-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/45-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/45-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/46-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/46-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/47-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/47-min.JPG"
    }, {
        url: "../../assets/img/pictures/2017/real/48-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/48-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/49-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/49-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/50-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/50-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/50-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/50-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/51-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/51-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/52-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/52-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/53-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/53-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/54-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/54-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/55-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/55-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/56-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/56-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/57-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/57-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/58-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/58-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/59-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/59-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/60-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/60-min.JPG"
    },
    {
        url: "../../assets/img/pictures/2017/real/61-min.JPG",
        thumbnailUrl: "../../assets/img/pictures/2017/thumb/61-min.JPG"
    },
];
//# sourceMappingURL=galleryconf.js.map

/***/ }),

/***/ "./src/app/picture/picture.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/picture/picture.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header section-dark\" style=\"background-image: url('../../assets/img/Pic_Landing.jpg')\">\n      <div class=\"filter\"></div>\n      <div class=\"content-center\">\n          <div class=\"container\">\n              <div class=\"title-brand\">\n                  <h1 class=\"presentation-title\">Foto's</h1>\n              </div>\n\n              <h2 class=\"presentation-subtitle text-center\">Foto's van 2017</h2>\n          </div>\n      </div>\n      <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n  </div>\n  <div class=\"main\">\n         <ngx-image-gallery class=\"gallery\"\n        [images]=\"images\" \n        [conf]=\"conf\"\n        (onOpen)=\"galleryOpened($event)\"\n        (onClose)=\"galleryClosed()\"\n        (onImageClicked)=\"galleryImageClicked($event)\"\n        (onImageChange)=\"galleryImageChanged($event)\"\n        (onDelete)=\"deleteImage($event)\"\n        ></ngx-image-gallery>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/picture/picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PictureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_image_gallery__ = __webpack_require__("./node_modules/ngx-image-gallery/ngx-image-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_image_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_image_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galleryconf__ = __webpack_require__("./src/app/picture/galleryconf.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PictureComponent = (function () {
    function PictureComponent() {
        this.showConf = true;
        this.title = 'Demo App';
        // gallery configuration
        this.conf = __WEBPACK_IMPORTED_MODULE_2__galleryconf__["a" /* DEMO_GALLERY_CONF_INLINE */];
        // gallery images
        this.images = __WEBPACK_IMPORTED_MODULE_2__galleryconf__["b" /* DEMO_GALLERY_IMAGE */];
    }
    // METHODS
    // open gallery
    PictureComponent.prototype.openGallery = function (index) {
        if (index === void 0) { index = 0; }
        // console.log(this.ngxImageGallery);
        // this.ngxImageGallery.open(index);
    };
    // close gallery
    PictureComponent.prototype.closeGallery = function () {
        // this.ngxImageGallery.close();
    };
    // set new active(visible) image in gallery
    PictureComponent.prototype.newImage = function (index) {
        if (index === void 0) { index = 0; }
        // this.ngxImageGallery.setActiveImage(index);
    };
    // next image in gallery
    PictureComponent.prototype.nextImage = function () {
        this.ngxImageGallery.next();
    };
    // prev image in gallery
    PictureComponent.prototype.prevImage = function () {
        this.ngxImageGallery.prev();
    };
    /**************************************************/
    // EVENTS
    // callback on gallery opened
    PictureComponent.prototype.galleryOpened = function (index) {
        console.info('Gallery opened at index ', index);
    };
    // callback on gallery closed
    PictureComponent.prototype.galleryClosed = function () {
        console.info('Gallery closed.');
    };
    // callback on gallery image clicked
    PictureComponent.prototype.galleryImageClicked = function (index) {
        console.info('Gallery image clicked with index ', index);
        // this.ngxImageGallery.open(index);
    };
    // callback on gallery image changed
    PictureComponent.prototype.galleryImageChanged = function (index) {
        console.info('Gallery image changed to index ', index);
    };
    // callback on user clicked delete button
    PictureComponent.prototype.deleteImage = function (index) {
        console.info('Delete image at index ', index);
    };
    return PictureComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ngxImageGallery'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_image_gallery__["NgxImageGalleryComponent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_image_gallery__["NgxImageGalleryComponent"]) === "function" && _a || Object)
], PictureComponent.prototype, "ngxImageGallery", void 0);
PictureComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-picture',
        template: __webpack_require__("./src/app/picture/picture.component.html"),
        styles: [__webpack_require__("./src/app/picture/picture.component.css")]
    })
], PictureComponent);

var _a;
//# sourceMappingURL=picture.component.js.map

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Leander Coevoet\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://www.creative-tim.com\">Een dag in de hel</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Ga naar de home pagina\"\n                     data-placement=\"bottom\" routerLink=\"/home\"  routerLinkActive=\"active\">\n                        <i class=\"fa fa-bicycle\"></i>\n                        <p class=\"d-lg-none\">Home</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Bekijk onze foto's\" \n                    data-placement=\"bottom\" routerLink=\"/pictures\"  routerLinkActive=\"active\">\n                        <i class=\"fa fa-image\"></i>\n                        <p class=\"d-lg-none\">Foto's</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Bekijk wie wij zijn\"\n                     data-placement=\"bottom\" routerLink=\"/whoarewe\"  routerLinkActive=\"active\">\n                        <i class=\"fa fa-users \"></i>\n                        <p class=\"d-lg-none\">Wie zijn wij</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a href=\"http://pk2-angular.creative-tim.com/documentation/tutorial\" class=\"nav-link\" target=\"_blank\">\n                        <i class=\"nc-icon nc-book-bookmark\"></i> Documentation</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isHome()\">\n                    <a [routerLink]=\"['/home']\" *ngIf=\"!isDocumentation()\" class=\"nav-link\"><i class=\"nc-icon nc-layout-11\"></i>Components</a>\n                    <a [routerLink]=\"['/home']\" *ngIf=\"isDocumentation()\" class=\"nav-link\">Back to Kit</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/shared/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/whoarewe/whoarewe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/whoarewe/whoarewe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header section-dark\" style=\"background-image: url('../../assets/img/whoarewe/IMG_0139.jpg')\">\n      <div class=\"filter\"></div>\n      <div class=\"content-center\">\n          <div class=\"container\">\n              <div class=\"title-brand\">\n                  <h1 class=\"presentation-title\">Wie zijn wij</h1>\n              </div>\n\n           </div>\n      </div>\n      <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n  </div>\n  <div class=\"main\">\n      <div class=\"section section-info\">\n          <div class=\"container\">\n              <div class=\"tim-title\">\n                  <h2 class=\"text-center\">Wie zijn wij</h2>\n              </div>\n            <p>We zijn collega's en vrienden die houden van het wielrennen. Met een dag in de hel organiseren wij onder vrienden een dag uitstap naar Parijs-Roubaix waar plezier centraal staat.</p>\n        <h3>Het team</h3>\n        <div class=\"row\">\n            <div _ngcontent-c8=\"\" class=\"col-xs-6  col-sm-4 offset-md-1\">\n                <img _ngcontent-c8=\"\" alt=\"Rounded Image\" \n                class=\"img-circle img-no-padding img-responsive\" \n                src=\"assets/img/whoarewe/Luc.jpg\">\n                <h4 _ngcontent-c8=\"\" class=\"text-center\">Luc</h4>\n            </div>\n            <div _ngcontent-c8=\"\" class=\"col-xs-6  col-sm-4 offset-md-1\">\n                <img _ngcontent-c8=\"\" alt=\"Rounded Image\" \n                class=\"img-circle img-no-padding img-responsive\" \n                src=\"assets/img/whoarewe/Jo.jpg\">\n                <h4 _ngcontent-c8=\"\" class=\"text-center\">Jo</h4>\n            </div>\n            <div _ngcontent-c8=\"\" class=\"col-xs-6  col-sm-4 offset-md-1\">\n                <img _ngcontent-c8=\"\" alt=\"Rounded Image\" \n                class=\"img-circle img-no-padding img-responsive\" \n                src=\"assets/img/whoarewe/Rony.jpg\">\n                <h4 _ngcontent-c8=\"\" class=\"text-center\">Rony</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/whoarewe/whoarewe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoareweComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoareweComponent = (function () {
    function WhoareweComponent() {
    }
    WhoareweComponent.prototype.ngOnInit = function () {
    };
    return WhoareweComponent;
}());
WhoareweComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-whoarewe',
        template: __webpack_require__("./src/app/whoarewe/whoarewe.component.html"),
        styles: [__webpack_require__("./src/app/whoarewe/whoarewe.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WhoareweComponent);

//# sourceMappingURL=whoarewe.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map