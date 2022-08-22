"use strict";
(self["webpackChunkliberty_family_dentistry"] = self["webpackChunkliberty_family_dentistry"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);






class AppComponent {
    constructor() {
        this.title = 'liberty-family-dentistry';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["charset", "utf-8"], ["content", "width=device-width, initial-scale=1.0", "name", "viewport"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "meta", 0)(1, "meta", 1)(2, "app-nav-bar")(3, "app-hero")(4, "app-main-page")(5, "app-footer")(6, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__.MainPageComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 1108);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ 1411);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _main_page_information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/information/information.component */ 4137);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 5116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__.HeroComponent,
        _services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent,
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent,
        _main_page_information_information_component__WEBPACK_IMPORTED_MODULE_7__.InformationComponent,
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__.ContactUsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule] }); })();


/***/ }),

/***/ 5116:
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
    submitForm() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "pictures"], ["src", "../../assets/img/dental-office.jpeg"], [1, "field"], [1, "label"], ["type", "text", "name", "name", 1, "input"], ["type", "number", "name", "phone", 1, "input"], ["type", "email", "name", "email", 1, "input"], ["name", "message", 1, "textarea"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form")(4, "div", 3)(5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: [".container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 85vh;\n    display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODV2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-us/contact-us.component */ 5116);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 35, vars: 0, consts: [[1, "container"], [1, "image-footer"], ["src", "../../assets/img/dental-office.jpeg"], [1, "our-office"], [1, "our-office-content"], [1, "item"], ["aria-hidden", "true", 1, "fa", "fa-mobile", "fa-3x"], [1, "our-office-content-text"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "fa-2x"], ["href", "https://goo.gl/maps/N6mHmGYoWqLZJY5D9"], ["aria-hidden", "true", 1, "fa", "fa-clock-o", "fa-2x"], [1, "map"], [1, "mapouter"], [1, "gmap_canvas"], ["width", "600", "height", "500", "id", "gmap_canvas", "src", "https://maps.google.com/maps?q=24%20Liberty%20ln%20Mcminnville&t=&z=15&ie=UTF8&iwloc=&output=embed", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0"], ["href", "https://fmovies-online.net"], ["href", "https://www.embedgooglemap.net"], [1, "all-rights"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Our Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Call 615-495-4154");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5)(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7)(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "24 Liberty Ln, McMinnville, TN 37110");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Monday-Friday: 9am - 4pm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11)(24, "div", 12)(25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "iframe", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "fmovies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "embedgooglemap.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "app-contact-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u00A9 2022 Liberty Family Dentistry. All rights reserved.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent], styles: [".container[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 75vh;\n    transition: all 0.4s ease-in-out;\n    background-color: #e8eaf0!important;\n    min-width: 100%;\n    margin:0;\n}\n\n.all-rights[_ngcontent-%COMP%] {\n    color: white;\n    height: 4rem;\n    background-color: #2d3e77 !important;\n    display: flex;\n    justify-content: center;\n    padding: 1.5rem;\n}\n\n.our-office[_ngcontent-%COMP%]{\n    width: 40%;\n    color: var(--header-blue);\n}\n\n.our-office[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    margin-bottom: 3rem;\n    font-weight: 400;\n}\n\n.our-office[_ngcontent-%COMP%]   .our-office-content[_ngcontent-%COMP%]{\n    max-width: 100%;\n    align-items: center;\n    display: flex;\n    flex-direction: column; \n    align-items: flex-start; \n}\n\n.our-office[_ngcontent-%COMP%]   .our-office-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\n    max-width: 100%;\n    align-items: center;\n    display: flex;    \n    margin-bottom: 2rem;\n}\n\n.our-office[_ngcontent-%COMP%]   .our-office-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    margin-left: 0.5rem;\n}\n\n.our-office[_ngcontent-%COMP%]   .our-office-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n   height: 40px;\n   filter: hue-rotate(90deg);\n}\n\n.our-office-content-text[_ngcontent-%COMP%]{\n    padding-left: 1rem;\n    color:var(--text);\n    font-size: 1.125rem;\n}\n\n.image-footer[_ngcontent-%COMP%]{\n    display: none;\n}\n\na[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color:var(--text);\n    font-size: 1.125rem;\n}\n\n@media only screen and (max-width: 600px){\n    .map[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .container[_ngcontent-%COMP%]{\n        height: 100vh;\n        padding:0;\n        flex-direction: column;\n        align-content: space-between;\n        justify-content: flex-start;\n    }\n\n    .our-office[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n        background-color: #e8eaf0!important;\n    }\n\n    .our-office[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 40px;\n        padding-left:2rem;\n        padding-right:2rem;\n        padding-top: 3rem;\n    }\n\n    .our-office[_ngcontent-%COMP%]   .our-office-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\n        font-size: 22px;\n        padding-left:2rem;\n        padding-right:2rem;\n    }\n\n    .image-footer[_ngcontent-%COMP%]{\n        display: block;\n        max-width:100%;\n        max-height:100%;\n    }\n    .image-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n        width: 100%;\n        height: 100%;\n        margin-bottom: 8rem;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtHQUNHLFlBQVk7R0FDWix5QkFBeUI7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixTQUFTO1FBQ1Qsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1DQUFtQztJQUN2Qzs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7QUFFSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNzV2aDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWYwIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOjA7XG59XG5cbi5hbGwtcmlnaHRzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDNlNzcgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLm91ci1vZmZpY2V7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWJsdWUpO1xufVxuXG4ub3VyLW9mZmljZSBoMXtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ub3VyLW9mZmljZSAub3VyLW9mZmljZS1jb250ZW50e1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxufVxuXG4ub3VyLW9mZmljZSAub3VyLW9mZmljZS1jb250ZW50IC5pdGVte1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cblxuLm91ci1vZmZpY2UgLm91ci1vZmZpY2UtY29udGVudCAuaXRlbSBpe1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5cbi5vdXItb2ZmaWNlIC5vdXItb2ZmaWNlLWNvbnRlbnQgaW1ne1xuICAgaGVpZ2h0OiA0MHB4O1xuICAgZmlsdGVyOiBodWUtcm90YXRlKDkwZGVnKTtcbn1cblxuLm91ci1vZmZpY2UtY29udGVudC10ZXh0e1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBjb2xvcjp2YXIoLS10ZXh0KTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuLmltYWdlLWZvb3RlcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjp2YXIoLS10ZXh0KTtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgLm1hcHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAub3VyLW9mZmljZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWFmMCFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm91ci1vZmZpY2UgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjJyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MnJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgfVxuXG4gICAgLm91ci1vZmZpY2UgLm91ci1vZmZpY2UtY29udGVudCAuaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MnJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDoycmVtO1xuICAgIH1cblxuICAgIC5pbWFnZS1mb290ZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXgtd2lkdGg6MTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xuICAgIH1cbiAgICAuaW1hZ2UtZm9vdGVyIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHJlbTtcbiAgICB9XG5cbn0iXX0= */", ".mapouter[_ngcontent-%COMP%]{position:relative;text-align:right;height:500px;width:600px;}", ".gmap_canvas[_ngcontent-%COMP%] {overflow:hidden;background:none!important;height:500px;width:600px;}"] });


/***/ }),

/***/ 3229:
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 11, vars: 0, consts: [[1, "container-fluid"], [1, "content-picture"], ["id", "smile-patient", "src", "../../assets/img/smile-patient.jpeg"], ["id", "dental-equipment", "src", "../../assets/img/dental-office.jpeg"], [1, "content-text"], [1, "header"], [1, "sub-header"], [1, "learn-more"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Liberty Family Dentistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your great smile begins with a great dentist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LEARN MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["*[_ngcontent-%COMP%] {\n    margin: 0px;\n  }\n\n.container-fluid[_ngcontent-%COMP%]{\n    height: 95vh;\n    display: flex;\n    flex-direction: row;\n    margin:0;\n    z-index: 1;\n    width: 100%;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    \n}\n\n.content-picture[_ngcontent-%COMP%]{\n    object-fit: cover;\n    z-index: 100;\n    width: 30%;\n    \n    \n    background-color:  #2d3e77 !important;\n}\n\n#smile-patient[_ngcontent-%COMP%]{\n    position: relative;\n    top: 20vh;\n    margin-left: 5px;\n    width:85%;\n    box-shadow: 12px 12px 18px -14px rgb(0 0 0 / 30%);\n}\n\n#dental-equipment[_ngcontent-%COMP%]{\n    display: inline-block;\n    position: relative;\n    margin-left: 15rem;\n    width: 350px;\n    height: 390px;\n    box-shadow: 12px 12px 18px -14px rgb(0 0 0 / 30%);\n    top: 45px;\n}\n\n.content-text[_ngcontent-%COMP%]{\n    width: 70%;\n    background-color: #e8eaf0!important;\n    padding-top: 30vh;\n    padding-left: 10rem;\n}\n\n.sub-header[_ngcontent-%COMP%]{\n    font-family: 'Century Gothic Regular',Helvetica,Arial,Lucida,sans-serif;\n    font-weight: 700;\n    font-size: 70px;\n    \n    color:  var(--header-blue) !important;\n    line-height: 1.2em;\n}\n\n.header[_ngcontent-%COMP%]{\n    font-family: 'Century Gothic Regular',Helvetica,Arial,Lucida,sans-serif;\n    font-weight: 600;\n    font-size: 20px;\n    \n    color:  var(--header-blue) !important;\n    line-height: 2.2em;\n}\n\n.learn-more[_ngcontent-%COMP%]{\n    color: #ffffff!important;\n    border-color:  var(--header-blue) !important;\n    border-radius: 50px;\n    font-size: 16px;\n    font-family: 'Martel Sans',Helvetica,Arial,Lucida,sans-serif!important;\n    font-weight: 700!important;\n    text-transform: uppercase!important;\n    background-color:  var(--header-blue) !important;\n    padding-top: 14px!important;\n    padding-right: 60px!important;\n    padding-bottom: 14px!important;\n    padding-left: 60px!important;\n    margin-top:3.5rem;\n}\n\n@media only screen and (max-width: 600px){\n    .container-fluid[_ngcontent-%COMP%]{\n        display: block;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: 90vh;\n        background-image: url('abstract-hero.jpeg'); \n    }\n    .content-picture[_ngcontent-%COMP%]{\n        object-fit: cover;\n        z-index: 100;\n        width: 100%;\n        \n        \n        background-color:  #bdc5e0 !important;\n    }\n\n    #smile-patient[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    #dental-equipment[_ngcontent-%COMP%]{\n        display: none;\n        \n    }\n\n    .content-text[_ngcontent-%COMP%]{\n        position: absolute;\n        width: auto;\n        background-color: transparent !important;\n        padding-top:9rem;\n        padding-left: 2rem;\n        padding-right: 1rem;\n    }\n\n    .sub-header[_ngcontent-%COMP%]{\n        font-family: 'Century Gothic Regular',Helvetica,Arial,Lucida,sans-serif;\n        font-weight: 700;\n        color: var(--header-blue) !important;\n        line-height: 1.2em;\n        font-size: 45px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNEZBQTRGO0FBQ2hHOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0VBQW9FO0lBQ3BFLHdEQUF3RDtJQUN4RCxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsaURBQWlEO0FBQ3JEOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpREFBaUQ7SUFDakQsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUVBQXVFO0lBQ3ZFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1RUFBdUU7SUFDdkUsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzRUFBc0U7SUFDdEUsMEJBQTBCO0lBQzFCLG1DQUFtQztJQUNuQyxnREFBZ0Q7SUFDaEQsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLDJCQUEyQjtRQUMzQiw0QkFBNEI7UUFDNUIsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWiwyQ0FBMEQ7SUFDOUQ7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osV0FBVztRQUNYLG9FQUFvRTtRQUNwRSx3REFBd0Q7UUFDeEQscUNBQXFDO0lBQ3pDOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYjs7O2dCQUdRO0lBQ1o7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLHdDQUF3QztRQUN4QyxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHVFQUF1RTtRQUN2RSxnQkFBZ0I7UUFDaEIsb0NBQW9DO1FBQ3BDLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiaGVyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICBoZWlnaHQ6IDk1dmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjowO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZyxyZ2JhKDQwLDk5LDExMiwwLjMpIDMyJSwjZjRmMWU4IDMyJSkhaW1wb3J0YW50OyAqL1xufVxuXG4uY29udGVudC1waWN0dXJle1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB3aWR0aDogMzAlO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2JsdWUtZ3JhaW4tZGVudGFsLmpwZWcpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMWMzMzgyLCM0MzU5ODkpOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjMmQzZTc3ICFpbXBvcnRhbnQ7XG59XG5cbiNzbWlsZS1wYXRpZW50e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwdmg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB3aWR0aDo4NSU7XG4gICAgYm94LXNoYWRvdzogMTJweCAxMnB4IDE4cHggLTE0cHggcmdiKDAgMCAwIC8gMzAlKTtcbn1cblxuXG4jZGVudGFsLWVxdWlwbWVudHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNXJlbTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzOTBweDtcbiAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMThweCAtMTRweCByZ2IoMCAwIDAgLyAzMCUpO1xuICAgIHRvcDogNDVweDtcbn1cblxuLmNvbnRlbnQtdGV4dHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZjAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAzMHZoO1xuICAgIHBhZGRpbmctbGVmdDogMTByZW07XG59XG5cbi5zdWItaGVhZGVye1xuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMgUmVndWxhcicsSGVsdmV0aWNhLEFyaWFsLEx1Y2lkYSxzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIC8qIGNvbG9yOiAjMDA2MjZmIWltcG9ydGFudDsgKi9cbiAgICBjb2xvcjogIHZhcigtLWhlYWRlci1ibHVlKSAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cblxuLmhlYWRlcntcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljIFJlZ3VsYXInLEhlbHZldGljYSxBcmlhbCxMdWNpZGEsc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKiBjb2xvcjogIzAwNjI2ZiFpbXBvcnRhbnQ7ICovXG4gICAgY29sb3I6ICB2YXIoLS1oZWFkZXItYmx1ZSkgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMi4yZW07XG59XG5cbi5sZWFybi1tb3Jle1xuICAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICB2YXIoLS1oZWFkZXItYmx1ZSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LWZhbWlseTogJ01hcnRlbCBTYW5zJyxIZWx2ZXRpY2EsQXJpYWwsTHVjaWRhLHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1oZWFkZXItYmx1ZSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMTRweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNjBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE0cHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNjBweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDozLjVyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYWJzdHJhY3QtaGVyby5qcGVnKTsgXG4gICAgfVxuICAgIC5jb250ZW50LXBpY3R1cmV7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9ibHVlLWdyYWluLWRlbnRhbC5qcGVnKTsgKi9cbiAgICAgICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMxYzMzODIsIzQzNTk4OSk7ICovXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjYmRjNWUwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgI3NtaWxlLXBhdGllbnR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgI2RlbnRhbC1lcXVpcG1lbnR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIC8qIHdpZHRoOjEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHRvcDowOyAqL1xuICAgIH1cblxuICAgIC5jb250ZW50LXRleHR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOjlyZW07XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICAuc3ViLWhlYWRlcntcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYyBSZWd1bGFyJyxIZWx2ZXRpY2EsQXJpYWwsTHVjaWRhLHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSkgIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 4137:
/*!****************************************************************!*\
  !*** ./src/app/main-page/information/information.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationComponent": () => (/* binding */ InformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function InformationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.service);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", card_r1.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class InformationComponent {
    constructor() {
        this.CARDS = [
            { service: "Dental Crowns", icon: "../../../assets/img/tooth-icons/crown-tooth.svg", width: "90" },
            { service: "Dental Exam & Check-Ups", icon: "../../../assets/img/tooth-icons/exam-tooth.svg", width: "90" },
            { service: "Dental Implants", icon: "../../../assets/img/tooth-icons/implant-tooth.svg", width: "100" },
            { service: "Invisalign", icon: "../../../assets/img/tooth-icons/star-tooth.svg", width: "90" },
            { service: "Tooth Extractions", icon: "../../../assets/img/tooth-icons/tooth.svg", width: "90" },
            { service: "Teeth Whitening", icon: "../../../assets/img/tooth-icons/clean-tooth.svg", width: "90" },
        ];
    }
    ngOnInit() {
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(); };
InformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], decls: 14, vars: 1, consts: [[1, "container-fluid"], [1, "about-office"], ["id", "title"], ["id", "content"], [1, "button-services"], [1, "our-services"], [1, "our-services-cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-body"], [1, "card-title"], [3, "width", "src"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "div", 1)(3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "How Liberty Family Dentistry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Can Help You..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Our liberty family dentist office was built for people of all ages and high-quality dental care for your whole family. We love to celebrate with you the joy of a happy, healthy smile. We combine cutting-edge dentistry with a team who treats you like family. Enjoy personalized appointments and all-encompassing dental care provided by our own Dr. Magi Sargious. You\u2019ll feel right at home at our liberty family dentist office thanks to our focus on your comfort, health, and happiness.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "View All Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InformationComponent_div_13_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.CARDS);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["section[_ngcontent-%COMP%]{\n    position: relative;\n    z-index: 2;\n    border-top-left-radius: 16rem;\n}\n.container-fluid[_ngcontent-%COMP%]{\n    border-top-left-radius: 16rem;\n    height:90vh;\n    display:flex;\n    margin-left: 7rem;\n    padding-top: 8rem;\n    width: 85%;\n}\n.about-office[_ngcontent-%COMP%]{\n    width: 45%;\n    margin-right: 5rem;\n    line-height: 1.6em;\n}\n.about-office[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color:var(--text);\n    font-size: 1.125rem;\n}\n.about-office[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{\n    color:var(--header-blue);\n    font-size: 35px;\n    font-weight: 400;\n    line-height: 2em;\n}\n.our-services[_ngcontent-%COMP%]{\n    width:65%;\n}\n.our-services-cards[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 4rem;\n\n}\n.card[_ngcontent-%COMP%]{\n    border-radius: 2rem;\n    text-align: center;\n    transition: .1s ease-in-out;\n    position: relative;\n    width: 90%;\n    padding: 1rem;\n    background-color: #fff;\n    border: 1px solid #fff;\n    box-shadow: 0 0 15px #c6cfdc;\n    color: grey;\n}\n.card[_ngcontent-%COMP%]:hover{\n    z-index:3;\n    color: var(--header-blue);\n    font-weight:bold;\n    box-shadow: 0 0 50px #c6cfdc;\n}\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    transition: .1s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover   .card-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    font-weight:bold;\n    filter: invert(12%) sepia(69%) saturate(2473%) hue-rotate(220deg) brightness(92%) contrast(96%);\n}\nbutton[_ngcontent-%COMP%]{\n    color: #ffffff!important;\n    border-color:  var(--header-blue) !important;\n    border-radius: 50px;\n    font-size: 14px;\n    font-family: 'Martel Sans',Helvetica,Arial,Lucida,sans-serif!important;\n    font-weight: 600!important;\n    text-transform: uppercase!important;\n    background-color:  var(--header-blue) !important;\n    padding-top: 10px!important;\n    padding-right: 50px!important;\n    padding-bottom: 10px!important;\n    padding-left: 50px!important;\n    margin-top:3.5rem;\n}\n@media only screen and (max-width: 600px){\n    .container-fluid[_ngcontent-%COMP%]{\n        height: 100vh;\n        padding:0;\n        flex-direction: column;\n        align-content: space-between;\n        justify-content: flex-start;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxjQUFjOztBQUVsQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsV0FBVztBQUNmO0FBRUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtGQUErRjtBQUNuRztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHNFQUFzRTtJQUN0RSwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLGdEQUFnRDtJQUNoRCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixTQUFTO1FBQ1Qsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QiwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJpbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnJlbTtcbn1cbi5jb250YWluZXItZmx1aWR7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZyZW07XG4gICAgaGVpZ2h0Ojkwdmg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIG1hcmdpbi1sZWZ0OiA3cmVtO1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICAgIHdpZHRoOiA4NSU7XG59XG5cbi5hYm91dC1vZmZpY2V7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xufVxuLmFib3V0LW9mZmljZSBwe1xuICAgIGNvbG9yOnZhcigtLXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG4uYWJvdXQtb2ZmaWNlICN0aXRsZXtcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItYmx1ZSk7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLm91ci1zZXJ2aWNlc3tcbiAgICB3aWR0aDo2NSU7XG59XG5cbi5vdXItc2VydmljZXMtY2FyZHN7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiA0cmVtO1xuXG59XG4uY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbi1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2M2Y2ZkYztcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLmNhcmQ6aG92ZXJ7XG4gICAgei1pbmRleDozO1xuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItYmx1ZSk7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBib3gtc2hhZG93OiAwIDAgNTBweCAjYzZjZmRjO1xufVxuXG4uY2FyZCAuY2FyZC10aXRsZSBpbWd7XG4gICAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2FyZDpob3ZlciAuY2FyZC10aXRsZSBpbWd7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmaWx0ZXI6IGludmVydCgxMiUpIHNlcGlhKDY5JSkgc2F0dXJhdGUoMjQ3MyUpIGh1ZS1yb3RhdGUoMjIwZGVnKSBicmlnaHRuZXNzKDkyJSkgY29udHJhc3QoOTYlKTtcbn1cblxuYnV0dG9ue1xuICAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICB2YXIoLS1oZWFkZXItYmx1ZSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogJ01hcnRlbCBTYW5zJyxIZWx2ZXRpY2EsQXJpYWwsTHVjaWRhLHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1oZWFkZXItYmx1ZSkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXRvcDogMTBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogNTBweCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHghaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNTBweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDozLjVyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./information/information.component */ 4137);


class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 1, vars: 0, template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-information");
    } }, dependencies: [_information_information_component__WEBPACK_IMPORTED_MODULE_0__.InformationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1108:
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 20, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["src", "../../assets/img/logo-2.png", "alt", "", "id", "logo", 1, "d-inline-block", "align-top"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "navbar-right"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8)(12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SERVICES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8)(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: [".navbar-nav[_ngcontent-%COMP%] {align-items: center;}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  margin-left: 3rem;\n  margin-right: 2rem;\n}\n\n#logo[_ngcontent-%COMP%]{\n  width: 180px;\n    transition: all 0.4s ease-in-out;\n    margin-bottom: 0;\n    max-height: 54%;\n    display: inline-block;\n    float: none;\n    vertical-align: middle;\n    -webkit-transform: translate3d(0, 0, 0);\n}\n\n.navbar[_ngcontent-%COMP%]{\n  height:85px;\n  background-color: white;\n  align-items: center;\n  box-shadow: 0 0 7px rgb(0 0 0 / 10%) !important;\n  position: sticky;\n}\n.me-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n  justify-content: flex-end;\n}\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]{\n  justify-content: flex-end;\n}\n.container-fluid[_ngcontent-%COMP%]{\n  padding-left: 60px;\n  padding-right: 60px;\n}\n.nav-item[_ngcontent-%COMP%]{\n  padding-left:16px;\n  padding-right:16px;\n  font-size: 16px;\n}\n.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n  color: var(--header-blue) !important;\n  font-weight: 600;\n  line-height: 2.2em;\n}\n@media only screen and (max-width: 600px){\n  .container-fluid[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    padding-right: 25px;\n  }\n  \n  .navbar[_ngcontent-%COMP%]{\n    height: auto;\n    position: sticky;\n    top:0;\n  }\n\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{\n    margin-left: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztJQUlJO0FBQ0osYUFBYSxtQkFBbUIsQ0FBQztBQUVqQztFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7Ozs7OztJQU1JO0FBRUo7RUFDRSxZQUFZO0lBRVYsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUNBQXVDO0FBQzNDO0FBRUE7O0dBRUc7QUFFSDtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLCtDQUErQztFQUMvQyxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixLQUFLO0VBQ1A7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRiIsImZpbGUiOiJuYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuYXBwLW5hdmJhcntcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTFkYztcbiB9ICovXG4ubmF2YmFyLW5hdiB7YWxpZ24taXRlbXM6IGNlbnRlcjt9XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi8qICNsb2dve1xuICBoZWlnaHQ6MTAwcHg7XG4gIHdpZHRoOjIwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgbWFyZ2luOiAwIGF1dG87IFxufSAgKi9cblxuI2xvZ297XG4gIHdpZHRoOiAxODBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWF4LWhlaWdodDogNTQlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmbG9hdDogbm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLyogI2xvZ28gaW1ne1xuICAgIG9iamVjdC1maXQ6Y292ZXI7XG59ICovXG5cbi5uYXZiYXJ7XG4gIGhlaWdodDo4NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDdweCByZ2IoMCAwIDAgLyAxMCUpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbi5tZS1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItY29sbGFwc2V7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbiAgcGFkZGluZy1yaWdodDogNjBweDtcbn1cblxuLm5hdi1pdGVte1xuICBwYWRkaW5nLWxlZnQ6MTZweDtcbiAgcGFkZGluZy1yaWdodDoxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGlua3tcbiAgY29sb3I6IHZhcigtLWhlYWRlci1ibHVlKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMi4yZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAuY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICB9XG4gIFxuICAubmF2YmFye1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDowO1xuICB9XG5cbiAgLm5hdmJhciAubmF2YmFyLWJyYW5ke1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 1411:
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "services works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1736), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map