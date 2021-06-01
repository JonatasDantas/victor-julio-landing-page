function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/@core/data/services-data.ts":
  /*!*********************************************!*\
    !*** ./src/app/@core/data/services-data.ts ***!
    \*********************************************/

  /*! exports provided: ServicesData */

  /***/
  function srcAppCoreDataServicesDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesData", function () {
      return ServicesData;
    });

    var ServicesData = [{
      name: 'Ensaio Feminino',
      encoded_name: 'ensaio-feminino',
      customObjectPosition: '50% 86%',
      imgBanner: 'feminino 1.jpg',
      images: ['feminino 1.jpg', 'feminino 2.jpg', 'feminino 3.jpg', 'feminino 5.jpg', 'feminino 6.jpg', 'feminino 7.jpg', 'feminino 8.jpg', 'feminino 9.jpg', 'feminino 10.jpg', 'feminino 11.jpg', 'feminino 12.jpg', 'feminino 13.jpg', 'feminino 14.jpg', 'feminino 15.jpg', 'feminino 16.jpeg', 'feminino 17.jpg', 'feminino 18.jpg', 'feminino 19.jpg', 'feminino 20.jpg', 'feminino 21.jpg', 'feminino 22.jpg', 'feminino 23.jpg', 'feminino 24.jpg', 'feminino 25.jpg']
    }, {
      name: 'Festa Infantil',
      encoded_name: 'ensaio-infantil',
      customObjectPosition: '50% 26%',
      imgBanner: 'infantil (14).jpg',
      images: ['infantil (1).jpg', 'infantil (2).jpg', 'infantil (3).jpg', 'infantil (4).jpg', 'infantil (5).jpg', 'infantil (6).jpg', 'infantil (7).jpg', 'infantil (8).jpg', 'infantil (9).jpg', 'infantil (10).jpg', 'infantil (11).jpg', 'infantil (12).jpg', 'infantil (13).jpg', 'infantil (14).jpg', 'infantil (15).jpg', 'infantil (16).jpg', 'infantil (17).jpg', 'infantil (18).jpg', 'infantil (19).jpg']
    }, {
      name: 'Eventos',
      encoded_name: 'eventos',
      imgBanner: 'eventos (1).jpeg',
      images: ['eventos (1).jpeg', 'eventos (2).jpeg', 'eventos (3).jpeg', 'eventos (4).jpeg', 'eventos (5).jpeg', 'eventos (6).jpeg', 'eventos (7).jpeg', 'eventos (8).jpeg', 'eventos (9).jpeg', 'eventos (10).jpeg', 'eventos (11).jpeg', 'eventos (12).jpeg', 'eventos (13).jpeg', 'eventos (14).jpeg', 'eventos (15).jpeg', 'eventos (16).jpeg', 'eventos (17).jpeg', 'eventos (18).jpeg', 'eventos (19).jpeg', 'eventos (20).jpeg', 'eventos (21).jpeg', 'eventos (22).jpeg', 'eventos (23).jpeg', 'eventos (24).jpeg', 'eventos (25).jpeg']
    }, {
      name: 'Smash the cake',
      encoded_name: 'smash-the-cake',
      imgBanner: 'smash (1).jpeg',
      images: ['smash (1).jpeg', 'smash (2).jpeg', 'smash (3).jpeg', 'smash (4).jpeg', 'smash (5).jpeg', 'smash (6).jpeg', 'smash (7).jpeg', 'smash (8).jpeg', 'smash (9).jpeg', 'smash (10).jpeg']
    }, {
      name: 'Debutantes',
      encoded_name: 'festa-15-anos',
      imgBanner: '15-anos (4).jpeg',
      images: ['15-anos (1).jpeg', '15-anos (2).jpeg', '15-anos (3).jpeg', '15-anos (4).jpeg', '15-anos (5).jpeg', '15-anos (6).jpeg', '15-anos (7).jpeg', '15-anos (8).jpeg', '15-anos (9).jpeg', '15-anos (10).jpeg', '15-anos (11).jpeg', '15-anos (12).jpeg', '15-anos (13).jpeg', '15-anos (14).jpeg', '15-anos (15).jpeg', '15-anos (16).jpeg', '15-anos (17).jpeg', '15-anos (18).jpeg', '15-anos (19).jpeg', '15-anos (20).jpeg', '15-anos (21).jpeg', '15-anos (22).jpeg', '15-anos (23).jpeg']
    }, {
      name: 'Ensaio Família',
      encoded_name: 'ensaio-familia',
      imgBanner: 'familia (1).jpeg',
      images: ['familia (1).jpeg', 'familia (2).jpeg', 'familia (3).jpeg', 'familia (4).jpeg', 'familia (5).jpeg', 'familia (6).jpeg', 'familia (7).jpeg', 'familia (8).jpeg', 'familia (9).jpeg', 'familia (10).jpeg', 'familia (11).jpeg', 'familia (12).jpeg']
    }, {
      name: 'Casamento civil',
      encoded_name: 'casamentos',
      imgBanner: 'casamentos (1).jpeg',
      images: ['casamentos (1).jpeg', 'casamentos (2).jpeg', 'casamentos (3).jpeg', 'casamentos (4).jpeg', 'casamentos (5).jpeg', 'casamentos (6).jpeg', 'casamentos (7).jpeg', 'casamentos (8).jpeg']
    }];
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/about-me/about-me.component */
    "./src/app/pages/about-me/about-me.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_hire_me_hire_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/hire-me/hire-me.component */
    "./src/app/pages/hire-me/hire-me.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/photo-gallery/photo-gallery.component */
    "./src/app/pages/photo-gallery/photo-gallery.component.ts");
    /* harmony import */


    var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/portfolio/portfolio.component */
    "./src/app/pages/portfolio/portfolio.component.ts");

    var routes = [{
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
      data: {
        animation: 'Home'
      }
    }, {
      path: 'sobre-mim',
      component: _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"],
      data: {
        animation: 'About-Me'
      }
    }, {
      path: 'portfolio',
      component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"],
      data: {
        animation: 'Portfolio'
      }
    }, {
      path: 'portfolio/detalhes/:encoded_name',
      component: _pages_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_6__["PhotoGalleryComponent"],
      data: {
        animation: 'Portfolio'
      }
    }, {
      path: 'quero-te-contratar',
      component: _pages_hire_me_hire_me_component__WEBPACK_IMPORTED_MODULE_4__["HireMeComponent"],
      data: {
        animation: 'HireMe'
      }
    }, {
      path: 'contato',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
      data: {
        animation: 'Contact'
      }
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route-animations */
    "./src/app/route-animations.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["container"];

    function AppComponent_div_23_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_23_li_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var link_r7 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.navigatePage(link_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r7.title);
      }
    }

    function AppComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_23_Template_img_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.navigateHome();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_23_li_7_Template, 3, 1, "li", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.links);
      }
    }

    function AppComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-icon", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_24_Template_nb_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r0.open();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_24_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.navigateHome();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_li_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_39_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var link_r15 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.navigatePage(link_r15);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r15.title);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, deviceService, iconLibraries, metaTagService) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.deviceService = deviceService;
        this.iconLibraries = iconLibraries;
        this.metaTagService = metaTagService;
        this.title = 'victor-julio-landing-page';
        this.isMobile = true;
        this.sidebarOpened = false;
        this.links = [{
          title: 'Home',
          link: 'home',
          icon: {
            icon: 'home',
            pack: 'fa'
          }
        }, {
          title: 'Sobre mim',
          link: 'sobre-mim',
          icon: {
            icon: 'user-tie',
            pack: 'fa'
          }
        }, {
          title: 'Portfolio',
          link: 'portfolio',
          icon: {
            icon: 'images',
            pack: 'fa'
          }
        }, {
          title: 'Quero te contratar',
          link: 'quero-te-contratar',
          icon: {
            icon: 'camera-retro',
            pack: 'fa'
          }
        }, {
          title: 'Dúvidas / Contato',
          link: 'contato',
          icon: {
            icon: 'comments',
            pack: 'fa'
          }
        }];
        this.iconLibraries.registerFontPack('fa', {
          iconClassPrefix: 'fa',
          packClass: 'fa'
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.metaTagService.addTags([{
            name: 'viewport',
            content: '"width=device-width, initial-scale=1'
          }, {
            name: 'keywords',
            content: 'Victor Julio, Victor Julio Fotografia, Fotografia, Victor, Julio, Victor Julio Fotógrafo'
          }, {
            name: 'robots',
            content: 'index, follow'
          }, {
            name: 'author',
            content: 'Victor Julio'
          }, {
            name: 'date',
            content: '2020-10-27',
            scheme: 'YYYY-MM-DD'
          }, {
            name: 'description',
            content: 'Venha conhecer o meu trabalho e faça seu orçamento'
          }, {
            name: 'google-site-verification',
            content: 'google-site-verification=tC8qyg19B-GfdpdZwSgokeEJgapbyNoLLPs2V02nMMo'
          }, {
            name: 'og:title',
            content: 'Victor Julio Fotografia'
          }, {
            name: 'og:type',
            content: 'website'
          }, {
            name: 'og:url',
            content: 'https://victorjulio.com.br/'
          }, {
            name: 'og:image',
            content: 'https://victorjulio.com.br/assets/img/meta-preview.PNG'
          }, {
            name: 'og:description',
            content: 'Venha conhecer o meu trabalho e faça seu orçamento'
          }, {
            charset: 'UTF-8'
          }]);
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
        }
      }, {
        key: "navigatePage",
        value: function navigatePage(link) {
          this.router.navigate([link.link]);
          this.sidebarContainer.nativeElement.parentElement.scrollTop = 0;
        }
      }, {
        key: "navigateHome",
        value: function navigateHome() {
          this.router.navigate(['home']);
          this.sidebarContainer.nativeElement.parentElement.scrollTop = 0;
        }
      }, {
        key: "navigateContact",
        value: function navigateContact() {
          this.router.navigate(['contato']);
          this.sidebarContainer.nativeElement.parentElement.scrollTop = 0;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconLibraries"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarContainer = _t.first);
        }
      },
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 49,
      vars: 9,
      consts: [[2, "height", "100vh"], [1, "mobile-sidebar", 3, "mode", "closeOnClickOutside", "autoFocus", "opened", "openedChange"], ["sidebar", ""], [1, "menu", 3, "items", "click"], [1, "info"], ["src", "/assets/img/company-logo-black.png"], [1, "info-text"], ["icon", "pin-outline", "status", "warning"], [2, "margin-top", "20px"], ["icon", "phone-outline", "status", "warning"], [1, "social-media"], ["href", "https://www.instagram.com/viictorjulio", "target", "_blank"], ["src", "/assets/img/Instagram-Icon.png"], ["href", "https://api.whatsapp.com/send?phone=5511977475738text=Oi!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento", "target", "_blank"], ["src", "/assets/img/whatsapp.png", 2, "height", "30px", "margin-top", "-3px"], ["href", "https://abnb.me/e/ToreN4ahmbb", "target", "_blank"], ["src", "/assets/img/airbnb.png"], ["ng-sidebar-content", "", 1, "ng-sidebar-content"], ["container", ""], ["subheader", "", 1, "nav-bar"], ["class", "navigation-bar", 4, "ngIf"], [1, "p-0"], ["o", "outlet"], [1, "pre-footer", "contact-us"], [1, "contact-label"], ["nbButton", "", "status", "basic", "size", "medium", "shape", "round", 3, "click"], [1, "footer"], [1, "footer-body"], [1, "footer-column", "row", "justify-content-center"], [1, "menu"], [4, "ngFor", "ngForOf"], [1, "navigation-bar"], [1, "navigation-overlay", "row", "d-flex"], [1, "col-md-2", "p-0", "header-left"], [1, "icon-logo"], ["src", "/assets/img/company-logo-black.png", 3, "click"], [1, "col-md-7", "header-menu"], [1, "menu-container"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "col-md-3", "header-right"], ["src", "/assets/img/whatsapp.png", 2, "height", "32px", "margin-top", "-5px", "margin-left", "8px"], ["src", "/assets/img/airbnb.png", 2, "margin-left", "4px"], [1, "menu-item"], [1, "item-info", 3, "click"], ["icon", "menu-outline", "status", "warning", 1, "menu-icon", 3, "click"], ["src", "/assets/img/company-logo-black.png", 2, "object-fit", "cover", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-sidebar-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-sidebar", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openedChange", function AppComponent_Template_ng_sidebar_openedChange_1_listener($event) {
            return ctx.sidebarOpened = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-menu", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_nb_menu_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nb-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " S\xE3o Paulo/SP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nb-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " 11 97747-5738 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-layout-header", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_div_23_Template, 16, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_div_24_Template, 3, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nb-layout-column", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quer ser fotografado(a) ou tem alguma d\xFAvida ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener() {
            return ctx.navigateContact();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Entre em contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nb-layout-footer", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AppComponent_li_39_Template, 3, 1, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Copyright \xA9 Victor Julio Fotografia - Todos os direitos reservados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "over")("closeOnClickOutside", true)("autoFocus", false)("opened", ctx.sidebarOpened);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.links);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", _r4 && _r4.activatedRouteData && _r4.activatedRouteData["animation"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [ng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarContainer"], ng_sidebar__WEBPACK_IMPORTED_MODULE_6__["Sidebar"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1px;\n  left: 0;\n  right: 0;\n  z-index: 10001;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 0px 35px;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 !important;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .icon-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .icon-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 4.75rem;\n  width: 6.8rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%]   .icon-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #0091d0;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0px 2rem;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  list-style: none;\n  display: inline-block;\n  padding-top: 7px;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 2rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  display: inline-block;\n  color: #ffff;\n  font-size: 1rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: 0.5s;\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%]:hover {\n  color: #EFCC82;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .item-textfield[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  display: inline-block;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 22px;\n}\n.nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .navigation-overlay[_ngcontent-%COMP%]   .header-right[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 22px;\n  width: auto;\n  margin-left: 12px;\n}\n@media screen and (max-width: 768px) {\n  .nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    position: relative;\n    margin-left: 8px;\n    top: 8px;\n  }\n  .nav-bar[_ngcontent-%COMP%]   .navigation-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 4.75rem;\n    width: 6.5rem;\n    -o-object-fit: cover !important;\n       object-fit: cover !important;\n    position: relative;\n    left: 27%;\n  }\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #bbbbbb !important;\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n  grid-row-gap: 5px;\n  justify-content: center;\n  justify-items: center;\n  text-align: center;\n  padding: 0 10px;\n  margin-top: 10px;\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%] {\n  color: #ffff;\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 30px;\n  padding: 0 10px;\n}\n.mobile-sidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n}\n.pre-footer.contact-us[_ngcontent-%COMP%] {\n  background-color: #EFCC82;\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  padding: 50px 80px;\n  display: block;\n  text-align: center;\n}\n.pre-footer.contact-us[_ngcontent-%COMP%]   .contact-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #fff;\n  margin: 0;\n  font-size: 1.4rem;\n  line-height: 1.4rem;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\n@media screen and (max-width: 768px) {\n  .pre-footer.contact-us[_ngcontent-%COMP%] {\n    padding: 20px 10px;\n  }\n  .pre-footer.contact-us[_ngcontent-%COMP%]   .contact-label[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%] {\n  color: #FFF;\n  text-align: center;\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 1rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: 0.5s;\n  font-family: \"Poppins\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  cursor: pointer;\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-left: 5px;\n  margin-bottom: 6px;\n}\n@media screen and (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .footer-body[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqb25hdFxcZGV2XFx2aWN0b3ItanVsaW8tbGFuZGluZy1wYWdlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDWjtBRENZO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0FDQ2hCO0FER2dCO0VBQ0kscUJBQUE7QUNEcEI7QURHb0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRHhCO0FESW9CO0VBQ0ksY0FBQTtBQ0Z4QjtBRE9ZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDTGhCO0FET2dCO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0xwQjtBRE9vQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNMeEI7QURPd0I7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrSEFBQTtBQ041QjtBRFN3QjtFQUNJLGNBQUE7QUNQNUI7QURVd0I7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDUjVCO0FEZWdCO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNicEI7QURlb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDYnhCO0FEb0JJO0VBQ0k7SUFDSSxVQUFBO0VDbEJWO0VEb0JVO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsUUFBQTtFQ2xCZDtFRHFCVTtJQUNJLGVBQUE7SUFDQSxhQUFBO0lBQ0EsK0JBQUE7T0FBQSw0QkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtFQ25CZDtBQUNGO0FEMEJJO0VBQ0ksMkNBQUE7QUN2QlI7QUQwQkk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3hCUjtBRDBCUTtFQUNJLGFBQUE7QUN4Qlo7QUQyQlE7RUFDSSxZQUFBO0FDekJaO0FEMkJZO0VBQ0ksaUJBQUE7QUN6QmhCO0FENkJRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDM0JaO0FENkJZO0VBQ0ksWUFBQTtBQzNCaEI7QURpQ0E7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM5Qko7QURnQ0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUM5QlI7QURpQ0k7RUFsQko7SUFtQlEsa0JBQUE7RUM5Qk47RURnQ007SUFDSSxlQUFBO0VDOUJWO0FBQ0Y7QURtQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNoQ1I7QURrQ1E7RUFDSSxrQkFBQTtBQ2hDWjtBRGtDWTtFQUNJLGdCQUFBO0FDaENoQjtBRG9Db0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtIQUFBO0VBQ0EsZUFBQTtBQ2xDeEI7QUR3Q1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUN0Q1o7QUR3Q1k7RUFDSSxrQkFBQTtBQ3RDaEI7QUR3Q2dCO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN0Q3BCO0FEMkNRO0VBQ0k7SUFDSSx5QkFBQTtFQ3pDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMDAxO1xyXG5cclxuICAgIC5uYXZpZ2F0aW9uLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzNXB4O1xyXG4gICAgXHJcbiAgICAgICAgLm5hdmlnYXRpb24tb3ZlcmxheSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICBcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgLmljb24tbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDkxZDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmhlYWRlci1tZW51IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAubWVudS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDJyZW07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW0taW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbS1pbmZvOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRUZDQzgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtLXRleHRmaWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5uYXZpZ2F0aW9uLWJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAubWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0Ljc1cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYuNXJlbTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNyU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9iaWxlLXNpZGViYXIge1xyXG4gICAgLm1lbnUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICBncmlkLXJvdy1nYXA6IDVweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluZm8tdGV4dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZjtcclxuXHJcbiAgICAgICAgICAgIG5iLWljb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByZS1mb290ZXIuY29udGFjdC11cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZDQzgyO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNTBweCA4MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmNvbnRhY3QtbGFiZWwge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG5cclxuICAgICAgICAuY29udGFjdC1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgLmZvb3Rlci1ib2R5IHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuZm9vdGVyLWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm5hdi1iYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwMTtcbn1cbi5uYXYtYmFyIC5uYXZpZ2F0aW9uLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAzNXB4O1xufVxuLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIC5uYXZpZ2F0aW9uLW92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIC5uYXZpZ2F0aW9uLW92ZXJsYXkgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5uYXYtYmFyIC5uYXZpZ2F0aW9uLWJhciAubmF2aWdhdGlvbi1vdmVybGF5IC5oZWFkZXItbGVmdCAuaWNvbi1sb2dvIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIC5uYXZpZ2F0aW9uLW92ZXJsYXkgLmhlYWRlci1sZWZ0IC5pY29uLWxvZ28gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDQuNzVyZW07XG4gIHdpZHRoOiA2LjhyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIC5uYXZpZ2F0aW9uLW92ZXJsYXkgLmhlYWRlci1sZWZ0IC5pY29uLWxvZ28gc3BhbiB7XG4gIGNvbG9yOiAjMDA5MWQwO1xufVxuLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIC5uYXZpZ2F0aW9uLW92ZXJsYXkgLmhlYWRlci1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubmF2LWJhciAubmF2aWdhdGlvbi1iYXIgLm5hdmlnYXRpb24tb3ZlcmxheSAuaGVhZGVyLW1lbnUgLm1lbnUtY29udGFpbmVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDJyZW07XG59XG4ubmF2LWJhciAubmF2aWdhdGlvbi1iYXIgLm5hdmlnYXRpb24tb3ZlcmxheSAuaGVhZGVyLW1lbnUgLm1lbnUtY29udGFpbmVyIC5tZW51LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cbi5uYXYtYmFyIC5uYXZpZ2F0aW9uLWJhciAubmF2aWdhdGlvbi1vdmVybGF5IC5oZWFkZXItbWVudSAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbSAuaXRlbS1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjZmZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5uYXYtYmFyIC5uYXZpZ2F0aW9uLWJhciAubmF2aWdhdGlvbi1vdmVybGF5IC5oZWFkZXItbWVudSAubWVudS1jb250YWluZXIgLm1lbnUtaXRlbSAuaXRlbS1pbmZvOmhvdmVyIHtcbiAgY29sb3I6ICNFRkNDODI7XG59XG4ubmF2LWJhciAubmF2aWdhdGlvbi1iYXIgLm5hdmlnYXRpb24tb3ZlcmxheSAuaGVhZGVyLW1lbnUgLm1lbnUtY29udGFpbmVyIC5tZW51LWl0ZW0gLml0ZW0tdGV4dGZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubmF2LWJhciAubmF2aWdhdGlvbi1iYXIgLm5hdmlnYXRpb24tb3ZlcmxheSAuaGVhZGVyLXJpZ2h0IC5zb2NpYWwtbWVkaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIC5uYXZpZ2F0aW9uLW92ZXJsYXkgLmhlYWRlci1yaWdodCAuc29jaWFsLW1lZGlhIGltZyB7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1iYXIgLm5hdmlnYXRpb24tYmFyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5uYXYtYmFyIC5uYXZpZ2F0aW9uLWJhciAubWVudS1pY29uIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB0b3A6IDhweDtcbiAgfVxuICAubmF2LWJhciAubmF2aWdhdGlvbi1iYXIgaW1nIHtcbiAgICBoZWlnaHQ6IDQuNzVyZW07XG4gICAgd2lkdGg6IDYuNXJlbTtcbiAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyNyU7XG4gIH1cbn1cblxuLm1vYmlsZS1zaWRlYmFyIC5tZW51IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiYmIgIWltcG9ydGFudDtcbn1cbi5tb2JpbGUtc2lkZWJhciAuaW5mbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtcm93LWdhcDogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tb2JpbGUtc2lkZWJhciAuaW5mbyBpbWcge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuLm1vYmlsZS1zaWRlYmFyIC5pbmZvIC5pbmZvLXRleHQge1xuICBjb2xvcjogI2ZmZmY7XG59XG4ubW9iaWxlLXNpZGViYXIgLmluZm8gLmluZm8tdGV4dCBuYi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubW9iaWxlLXNpZGViYXIgLmluZm8gLnNvY2lhbC1tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4ubW9iaWxlLXNpZGViYXIgLmluZm8gLnNvY2lhbC1tZWRpYSBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5wcmUtZm9vdGVyLmNvbnRhY3QtdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZDQzgyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTBweCA4MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByZS1mb290ZXIuY29udGFjdC11cyAuY29udGFjdC1sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMS40cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByZS1mb290ZXIuY29udGFjdC11cyB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICB9XG4gIC5wcmUtZm9vdGVyLmNvbnRhY3QtdXMgLmNvbnRhY3QtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uZm9vdGVyIC5mb290ZXItYm9keSB7XG4gIGNvbG9yOiAjRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyIC5mb290ZXItYm9keSAubWVudSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5mb290ZXIgLmZvb3Rlci1ib2R5IC5tZW51IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5mb290ZXIgLmZvb3Rlci1ib2R5IC5tZW51IHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXIgLmZvb3Rlci1ib2R5IC5zb2NpYWwtbWVkaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb290ZXIgLmZvb3Rlci1ib2R5IC5zb2NpYWwtbWVkaWEgYSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mb290ZXIgLmZvb3Rlci1ib2R5IC5zb2NpYWwtbWVkaWEgYSBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXIgLmZvb3Rlci1ib2R5IC5mb290ZXItY29sdW1uIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59Il19 */"],
      data: {
        animation: [_route_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [_route_animations__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconLibraries"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]
        }];
      }, {
        sidebarContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/home/home.module */
    "./src/app/pages/home/home.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _pages_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/about-me/about-me.module */
    "./src/app/pages/about-me/about-me.module.ts");
    /* harmony import */


    var _pages_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/portfolio/portfolio.module */
    "./src/app/pages/portfolio/portfolio.module.ts");
    /* harmony import */


    var _pages_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/photo-gallery/photo-gallery.module */
    "./src/app/pages/photo-gallery/photo-gallery.module.ts");
    /* harmony import */


    var _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/contact/contact.module */
    "./src/app/pages/contact/contact.module.ts");
    /* harmony import */


    var _pages_hire_me_hire_me_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/hire-me/hire-me.module */
    "./src/app/pages/hire-me/hire-me.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({
        name: 'default'
      }), ng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorModule"], _pages_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _pages_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_11__["AboutMeModule"], _pages_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__["PortfolioModule"], _pages_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_13__["PhotoGalleryModule"], _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_14__["ContactModule"], _pages_hire_me_hire_me_module__WEBPACK_IMPORTED_MODULE_15__["HireMeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorModule"], _pages_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _pages_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_11__["AboutMeModule"], _pages_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__["PortfolioModule"], _pages_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_13__["PhotoGalleryModule"], _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_14__["ContactModule"], _pages_hire_me_hire_me_module__WEBPACK_IMPORTED_MODULE_15__["HireMeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({
            name: 'default'
          }), ng_sidebar__WEBPACK_IMPORTED_MODULE_7__["SidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_10__["DeviceDetectorModule"], _pages_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"], _pages_about_me_about_me_module__WEBPACK_IMPORTED_MODULE_11__["AboutMeModule"], _pages_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_12__["PortfolioModule"], _pages_photo_gallery_photo_gallery_module__WEBPACK_IMPORTED_MODULE_13__["PhotoGalleryModule"], _pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_14__["ContactModule"], _pages_hire_me_hire_me_module__WEBPACK_IMPORTED_MODULE_15__["HireMeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/about-me/about-me.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/about-me/about-me.component.ts ***!
    \******************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppPagesAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 18,
      vars: 0,
      consts: [[1, "about-me"], [1, "welcoming"], [1, "divider", "warning"], [1, "details"], [1, "welcoming-image"], ["src", "/assets/img/sobre-mim.jpeg"], [1, "welcoming-text"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sobre mim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Prazer sou o Victor Julio. Fotografo profissionalmente desde os 17 anos, signo escorpi\xE3o, sou apaixonado por fotografia e sua capacidade de captar cada emo\xE7\xE3o eternizando momentos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Perfeccionista, persistente, sempre procuro fazer e trazer um diferencial para o meu trabalho. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sou especialista em ensaio pessoal, infantil e eventos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Sempre procuro fazer e trazer um diferencial para o meu trabalho. Sou eu quem dirige cada detalhe, fa\xE7o toda a produ\xE7\xE3o das fotos, sempre em conjunto com o cliente. Precisamos casar nossas ideias para tornar esses momentos especiais e inesquec\xEDveis! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about-me[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem 12rem;\n}\n.about-me[_ngcontent-%COMP%]   .welcoming[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n.about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n  padding: 0 0 0 3rem;\n  text-align: justify;\n}\n.about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media screen and (max-width: 768px) {\n  .about-me[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n    padding: 20px 0 0;\n  }\n  .about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtbWUvQzpcXFVzZXJzXFxqb25hdFxcZGV2XFx2aWN0b3ItanVsaW8tbGFuZGluZy1wYWdlL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXQtbWVcXGFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NSO0FERUk7RUFDSSxhQUFBO0VBQ0EscUNBQUE7QUNBUjtBREVRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBWjtBRElZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRmhCO0FET0k7RUEvQko7SUFnQ1Esa0JBQUE7RUNKTjtFRE1NO0lBQ0ksMEJBQUE7RUNKVjtFRE1VO0lBQ0ksaUJBQUE7RUNKZDtFRFFjO0lBQ0ksWUFBQTtFQ05sQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTJyZW07XHJcbiAgIFxyXG4gICAgLndlbGNvbWluZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG5cclxuICAgICAgICAud2VsY29taW5nLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgM3JlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53ZWxjb21pbmctaW1hZ2Uge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuXHJcbiAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHJcbiAgICAgICAgICAgIC53ZWxjb21pbmctdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndlbGNvbWluZy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5hYm91dC1tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDEycmVtO1xufVxuLmFib3V0LW1lIC53ZWxjb21pbmcge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5hYm91dC1tZSAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG59XG4uYWJvdXQtbWUgLmRldGFpbHMgLndlbGNvbWluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDAgMCAwIDNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uYWJvdXQtbWUgLmRldGFpbHMgLndlbGNvbWluZy1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWJvdXQtbWUge1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgfVxuICAuYWJvdXQtbWUgLmRldGFpbHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5hYm91dC1tZSAuZGV0YWlscyAud2VsY29taW5nLXRleHQge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICB9XG4gIC5hYm91dC1tZSAuZGV0YWlscyAud2VsY29taW5nLWltYWdlIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/about-me/about-me.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/about-me/about-me.module.ts ***!
    \***************************************************/

  /*! exports provided: AboutMeModule */

  /***/
  function srcAppPagesAboutMeAboutMeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeModule", function () {
      return AboutMeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-me.component */
    "./src/app/pages/about-me/about-me.component.ts");

    var AboutMeModule = function AboutMeModule() {
      _classCallCheck(this, AboutMeModule);
    };

    AboutMeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutMeModule
    });
    AboutMeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutMeModule_Factory(t) {
        return new (t || AboutMeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutMeModule, {
        declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _assets_smtp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/smtp.js */
    "./src/assets/smtp.js");
    /* harmony import */


    var _assets_smtp_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_smtp_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function ContactComponent_nb_alert_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-alert", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contato enviado com sucesso! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Obrigado pela mensagem! Entraremos em contato");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nome \xE9 obrigat\xF3rio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ContactComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email \xE9 obrigat\xF3rio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ContactComponent_ng_container_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Telefone \xE9 obrigat\xF3rio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function ContactComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Mensagem \xE9 obrigat\xF3rio ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(fb) {
        _classCallCheck(this, ContactComponent);

        this.fb = fb;
        this.errors = [];
        this.submitted = false;
        this.success = false;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buildForm();
        }
      }, {
        key: "buildForm",
        value: function buildForm() {
          this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.errors = [];

          if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
          }

          Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'contatoselmarservicos@gmail.com',
            Password: 'C05FFB9F6D63D594782902654CE84D46F0C2',
            To: 'jonatas.almeida14@usp.br; victor.marxstudio@gmail.com',
            From: "contatoselmarservicos@gmail.com",
            Subject: 'Novo pedido de Contato - Victor Julio',
            Body: "\n      <i>Novo pedido de contato no site Jo\xE3o victorrr.</i> <br/> <b>Nome: </b>".concat(this.form.value.name, " <br /> <b>Email: </b>").concat(this.form.value.email, "<br /> <b>Telefone: </b>").concat(this.form.value.phone, "<br /> <b>Mensagem:</b> <br /> ").concat(this.form.value.message, " <br><br> <b>~Fim da Mensagem.~</b> ")
          }).then(function (result) {
            if (result === 'OK') {
              _this.success = true;
            }
          });
          this.submitted = true;
          var data = this.form.value; // C6DFDA10FB0FCA0D80069B72F0DB555E8148
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 29,
      vars: 8,
      consts: [[1, "contact"], ["src", "/assets/img/contato-banner.jpg", 1, "background"], [1, "contact-info"], [3, "formGroup", "ngSubmit"], [1, "contact-form"], ["status", "success", 4, "ngIf"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], [1, "form-group"], ["nbInput", "", "fullWidth", "", "type", "text", "name", "name", "id", "name", "placeholder", "Nome", "status", "basic", "fieldSize", "large", "formControlName", "name"], [4, "ngIf"], ["nbInput", "", "fullWidth", "", "type", "text", "name", "email", "id", "email", "placeholder", "Email", "status", "basic", "fieldSize", "large", "formControlName", "email"], ["nbInput", "", "fullWidth", "", "type", "text", "name", "phone", "id", "phone", "placeholder", "Telefone", "status", "basic", "fieldSize", "large", "formControlName", "phone"], ["nbInput", "", "fullWidth", "", "rows", "4", "type", "text", "name", "message", "id", "message", "placeholder", "Mensagem", "status", "basic", "formControlName", "message"], [1, "buttons"], ["type", "submit", "nbButton", "", "hero", "", "status", "success", 1, "contact-button", 3, "disabled"], ["target", "_blank", "nbButton", "", "hero", "", "status", "success", "href", "https://api.whatsapp.com/send?phone=5511977475738text=Oi!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento", 1, "whatsapp-button", "appearance-hero", "size-medium", "status-success", "shape-rectangle", "nb-transition"], ["src", "/assets/img/whatsapp.png"], ["status", "success"], ["role", "alert", 1, "alert", "alert-success"], [1, "caption", "status-danger"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SOLICITE SEU OR\xC7AMENTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Entre em contato comigo e fa\xE7a um or\xE7amento. Ser\xE1 um prazer atend\xEA-lo(a)! Se preferir, meu whatsapp \xE9 (11) 97747-5738.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactComponent_nb_alert_9_Template, 2, 0, "nb-alert", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactComponent_div_10_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactComponent_ng_container_13_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactComponent_ng_container_16_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactComponent_ng_container_19_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactComponent_ng_container_22_Template, 3, 0, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enviar Contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Chame no Whatsapp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success && !ctx.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("name").invalid && ctx.form.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("email").invalid && ctx.form.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("phone").invalid && ctx.form.get("phone").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("message").invalid && ctx.form.get("message").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.success);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbAlertComponent"]],
      styles: [".contact[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #000000;\n}\n.contact[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  height: 700px;\n  width: 100%;\n  opacity: 0.6;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ffffff;\n  top: 22%;\n  left: 17%;\n  max-width: 500px;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1rem;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 400px;\n  position: absolute;\n  top: 18%;\n  right: 13%;\n  border: 1px solid #ffffff;\n  padding: 12px;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .alert-success[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .contact-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  float: right;\n}\n.contact[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  padding: 0 60px;\n}\n.contact[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .whatsapp-button[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n}\n.contact[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .whatsapp-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n}\n@media screen and (max-width: 768px) {\n  .contact[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    top: 2%;\n    left: 4%;\n  }\n  .contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    top: 28%;\n    right: 4%;\n    width: 92%;\n  }\n  .contact[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    display: grid;\n    justify-content: center;\n    padding: 0;\n  }\n  .contact[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .whatsapp-button[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXGpvbmF0XFxkZXZcXHZpY3Rvci1qdWxpby1sYW5kaW5nLXBhZ2Uvc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERVE7RUFDSSxjQUFBO0FDQVo7QURHUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDRFo7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDSFI7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0paO0FEUUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOUjtBRFFRO0VBQ0ksb0JBQUE7QUNOWjtBRFFZO0VBQ0ksWUFBQTtBQ05oQjtBRFdJO0VBQ0k7SUFDSSxPQUFBO0lBQ0EsUUFBQTtFQ1RWO0VEWU07SUFDSSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUNWVjtFRGFNO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0lBQ0EsVUFBQTtFQ1hWO0VEYVU7SUFDSSxlQUFBO0VDWGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblxyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0b3A6IDIyJTtcclxuICAgICAgICBsZWZ0OiAxNyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTglO1xyXG4gICAgICAgIHJpZ2h0OiAxMyU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG5cclxuICAgICAgICAuYWxlcnQtc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250YWN0LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA2MHB4O1xyXG5cclxuICAgICAgICAud2hhdHNhcHAtYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgICAgIHRvcDogMiU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgICAgIHRvcDogMjglO1xyXG4gICAgICAgICAgICByaWdodDogNCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgLndoYXRzYXBwLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29udGFjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cbi5jb250YWN0IC5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY29udGFjdCAuY29udGFjdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdG9wOiAyMiU7XG4gIGxlZnQ6IDE3JTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi5jb250YWN0IC5jb250YWN0LWluZm8gaDEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb250YWN0IC5jb250YWN0LWluZm8gcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY29udGFjdCAuY29udGFjdC1mb3JtIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICByaWdodDogMTMlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmNvbnRhY3QgLmNvbnRhY3QtZm9ybSAuYWxlcnQtc3VjY2VzcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0IC5jb250YWN0LWZvcm0gLmNvbnRhY3QtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNvbnRhY3QgLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMTVweDtcbiAgcGFkZGluZzogMCA2MHB4O1xufVxuLmNvbnRhY3QgLmJ1dHRvbnMgLndoYXRzYXBwLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuLmNvbnRhY3QgLmJ1dHRvbnMgLndoYXRzYXBwLWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGFjdCAuY29udGFjdC1pbmZvIHtcbiAgICB0b3A6IDIlO1xuICAgIGxlZnQ6IDQlO1xuICB9XG4gIC5jb250YWN0IC5jb250YWN0LWZvcm0ge1xuICAgIHRvcDogMjglO1xuICAgIHJpZ2h0OiA0JTtcbiAgICB3aWR0aDogOTIlO1xuICB9XG4gIC5jb250YWN0IC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmNvbnRhY3QgLmJ1dHRvbnMgLndoYXRzYXBwLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/contact/contact.module.ts ***!
    \*************************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppPagesContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactModule = function ContactModule() {
      _classCallCheck(this, ContactModule);
    };

    ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactModule
    });
    ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactModule_Factory(t) {
        return new (t || ContactModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"]], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, {
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbAlertModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbIconModule"]],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/hire-me/hire-me.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/hire-me/hire-me.component.ts ***!
    \****************************************************/

  /*! exports provided: HireMeComponent */

  /***/
  function srcAppPagesHireMeHireMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HireMeComponent", function () {
      return HireMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HireMeComponent = /*#__PURE__*/function () {
      function HireMeComponent() {
        _classCallCheck(this, HireMeComponent);
      }

      _createClass(HireMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HireMeComponent;
    }();

    HireMeComponent.ɵfac = function HireMeComponent_Factory(t) {
      return new (t || HireMeComponent)();
    };

    HireMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HireMeComponent,
      selectors: [["app-hire-me"]],
      decls: 24,
      vars: 0,
      consts: [[1, "hire-me"], [1, "welcoming"], [1, "divider", "warning"], [1, "details"], [1, "welcoming-image"], ["src", "/assets/img/banner-contrate.jpeg"], [1, "welcoming-text"]],
      template: function HireMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quero te contratar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Desde j\xE1 muito obrigado por curtir o meu trabalho, fico muito feliz e grato! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Qual o seu interesse? Cobrir a sua festa, evento ou ensaio pessoal? Me conta pra alinharmos! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Sou apaixonado por fotografia e pra mim \xE9 uma honra voc\xEA ter interesse em contratar o meu servi\xE7o. Atrav\xE9s do meu talento vou registrar seus melhores momentos e vers\xF5es. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Como funciona pra agendar um evento ou ensaio:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Para desenvolver a ideia do que ser\xE1 feito no seu ensaio ou at\xE9 mesmo reservar a data do seu evento \xE9 necess\xE1rio um sinal de 30% do valor contratado. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ap\xF3s o sinal iremos alinhar detalhes, e pe\xE7o para que voc\xEA me mostre suas inspira\xE7\xF5es de fotos, ent\xE3o salve no seu Instagram, Pinterest e etc, para que eu tenha uma ideia do que voc\xEA se identifica. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".hire-me[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem 12rem;\n}\n.hire-me[_ngcontent-%COMP%]   .welcoming[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n.hire-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.hire-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n  padding: 0 0 0 3rem;\n  text-align: justify;\n}\n.hire-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media screen and (max-width: 768px) {\n  .hire-me[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .hire-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hire-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n    padding: 20px 0 0;\n  }\n  .hire-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .welcoming-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlyZS1tZS9DOlxcVXNlcnNcXGpvbmF0XFxkZXZcXHZpY3Rvci1qdWxpby1sYW5kaW5nLXBhZ2Uvc3JjXFxhcHBcXHBhZ2VzXFxoaXJlLW1lXFxoaXJlLW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9oaXJlLW1lL2hpcmUtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREVJO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0FDQVI7QURFUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQVo7QURJWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0ZoQjtBRE9JO0VBL0JKO0lBZ0NRLGtCQUFBO0VDSk47RURNTTtJQUNJLDBCQUFBO0VDSlY7RURNVTtJQUNJLGlCQUFBO0VDSmQ7RURRYztJQUNJLFlBQUE7RUNObEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpcmUtbWUvaGlyZS1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaXJlLW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDEycmVtO1xyXG5cclxuICAgIC53ZWxjb21pbmcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuXHJcbiAgICAgICAgLndlbGNvbWluZy10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDNyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAud2VsY29taW5nLWltYWdlIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcblxyXG4gICAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcblxyXG4gICAgICAgICAgICAud2VsY29taW5nLXRleHQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC53ZWxjb21pbmctaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaGlyZS1tZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDEycmVtO1xufVxuLmhpcmUtbWUgLndlbGNvbWluZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmhpcmUtbWUgLmRldGFpbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xufVxuLmhpcmUtbWUgLmRldGFpbHMgLndlbGNvbWluZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDAgMCAwIDNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uaGlyZS1tZSAuZGV0YWlscyAud2VsY29taW5nLWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oaXJlLW1lIHtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gIH1cbiAgLmhpcmUtbWUgLmRldGFpbHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIC5oaXJlLW1lIC5kZXRhaWxzIC53ZWxjb21pbmctdGV4dCB7XG4gICAgcGFkZGluZzogMjBweCAwIDA7XG4gIH1cbiAgLmhpcmUtbWUgLmRldGFpbHMgLndlbGNvbWluZy1pbWFnZSBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HireMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hire-me',
          templateUrl: './hire-me.component.html',
          styleUrls: ['./hire-me.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/hire-me/hire-me.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/hire-me/hire-me.module.ts ***!
    \*************************************************/

  /*! exports provided: HireMeModule */

  /***/
  function srcAppPagesHireMeHireMeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HireMeModule", function () {
      return HireMeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _hire_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hire-me.component */
    "./src/app/pages/hire-me/hire-me.component.ts");

    var HireMeModule = function HireMeModule() {
      _classCallCheck(this, HireMeModule);
    };

    HireMeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HireMeModule
    });
    HireMeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HireMeModule_Factory(t) {
        return new (t || HireMeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HireMeModule, {
        declarations: [_hire_me_component__WEBPACK_IMPORTED_MODULE_2__["HireMeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HireMeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_hire_me_component__WEBPACK_IMPORTED_MODULE_2__["HireMeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_data_services_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/data/services-data */
    "./src/app/@core/data/services-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var _c0 = ["container"];

    function HomeComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sou o Victor J\xFAlio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sou especializado em fotografia, acompanhem o meu trabalho");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_ng_template_3_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.navigatePortfolio();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Veja meu portfolio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "object-position": a0
      };
    };

    function HomeComponent_nb_card_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_nb_card_9_Template_nb_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var service_r5 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.navigateServiceDetails(service_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HomeComponent_nb_card_9_Template_div_mouseover_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var i_r6 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.hoveredElement = i_r6;
        })("mouseout", function HomeComponent_nb_card_9_Template_div_mouseout_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.hoveredElement = 0 - 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Veja a galeria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r5 = ctx.$implicit;
        var i_r6 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "assets/img/", service_r5.encoded_name, "/", service_r5.imgBanner, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, service_r5.customObjectPosition));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r2.hoveredElement == i_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r5.name);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, metaTagService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.metaTagService = metaTagService;
        this.services = src_app_core_data_services_data__WEBPACK_IMPORTED_MODULE_1__["ServicesData"];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.metaTagService.updateTag({
            name: 'description',
            content: 'Venha conhecer o meu trabalho e faça seu orçamento'
          });
        }
      }, {
        key: "navigatePortfolio",
        value: function navigatePortfolio() {
          this.router.navigate(['portfolio']);
        }
      }, {
        key: "navigateServiceDetails",
        value: function navigateServiceDetails(service) {
          var sidebarElement = document.getElementsByClassName('ng-sidebar__content')[0];
          this.router.navigate(['portfolio/detalhes/', service.encoded_name]);
          sidebarElement.scrollTop = 0;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidebarContainer = _t.first);
        }
      },
      decls: 10,
      vars: 2,
      consts: [[1, "home"], ["container", ""], [1, "carousel-header", 3, "showNavigationArrows"], ["ngbSlide", ""], [1, "general-info"], [1, "welcoming"], [1, "divider", "warning"], [1, "services"], ["size", "small", 3, "click", 4, "ngFor", "ngForOf"], [1, "picsum-img-wrapper"], ["src", "/assets/img/landing.jpeg", 1, "background", "first", 2, "object-fit", "contain !important"], ["src", "/assets/img/landing-2.jpeg", 1, "background", "second", 2, "object-fit", "contain !important"], [1, "overlay"], [1, "carousel-caption", "header-caption"], [1, "carousel-actions"], ["nbButton", "", "status", "warning", "size", "large", "shape", "round", 3, "click"], ["size", "small", 3, "click"], [3, "src", "ngStyle"], [1, "caption", 3, "mouseover", "mouseout"], [1, "text"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-carousel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_3_Template, 12, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Estou aqui para eternizar os seus momentos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_nb_card_9_Template, 8, 8, "nb-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardFooterComponent"]],
      styles: [".home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 2rem;\n  background-color: #202020;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  height: 600px;\n  margin-left: 4%;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   .background.second[_ngcontent-%COMP%] {\n  margin-left: 26%;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000000;\n  z-index: 1;\n  opacity: 0.2;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .header-caption[_ngcontent-%COMP%] {\n  max-width: 530px;\n  text-align: center;\n  top: 95px;\n  bottom: auto;\n  left: 34%;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .header-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  font-size: 40px;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .header-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 300;\n  font-size: 26px;\n}\n.home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .carousel-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15%;\n  z-index: 10;\n  max-width: 430px;\n  left: 45%;\n  display: flex;\n  justify-content: space-between;\n  top: 310px;\n}\n@media screen and (max-width: 768px) {\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%] {\n    height: 600px;\n    padding: 0;\n    display: block;\n  }\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n    height: 500px;\n    position: absolute;\n    right: 0;\n    margin-top: -15px;\n    margin-left: 0;\n    width: 100%;\n  }\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .picsum-img-wrapper[_ngcontent-%COMP%]   .background.first[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .header-caption[_ngcontent-%COMP%] {\n    width: 100%;\n    left: 0;\n    top: auto;\n    bottom: 105px;\n  }\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .header-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: 500;\n    line-height: 26px;\n    margin-bottom: 1rem;\n  }\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .header-caption[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n    line-height: 25px;\n    text-align: center;\n    padding: 0 36px;\n  }\n  .home[_ngcontent-%COMP%]   .carousel-header[_ngcontent-%COMP%]   .carousel-actions[_ngcontent-%COMP%] {\n    left: 24%;\n    top: auto;\n    bottom: 65px;\n  }\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  text-align: center;\n  padding: 4rem 12rem 0;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .welcoming[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 60px 0px;\n  grid-column-gap: 35px;\n  grid-row-gap: 15px;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.04) !important;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 50% 12%;\n     object-position: 50% 12%;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  opacity: 0;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8.2rem 0;\n  transition: all 0.8s ease;\n  cursor: pointer;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  font-family: \"Quattrocento\", serif;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .caption.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  font-family: \"Abhaya Libre\", serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n}\n@media screen and (max-width: 768px) {\n  .home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .welcoming[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 1.4rem;\n    line-height: 1.5rem;\n  }\n  .home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    margin: 1rem 8rem;\n  }\n  .home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .home[_ngcontent-%COMP%]   .general-info[_ngcontent-%COMP%]   .services[_ngcontent-%COMP%] {\n    padding: 40px 0px;\n    grid-template-columns: 1fr;\n    grid-row-gap: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXGpvbmF0XFxkZXZcXHZpY3Rvci1qdWxpby1sYW5kaW5nLXBhZ2Uvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNEWjtBREdZO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNEaEI7QURHZ0I7RUFDSSxnQkFBQTtBQ0RwQjtBREtZO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDSGhCO0FET1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDTFo7QURRWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOaEI7QURTWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNQaEI7QURXUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0FDVFo7QURZUTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFVBQUE7SUFDQSxjQUFBO0VDVmQ7RURZYztJQUtJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VDZGxCO0VEZ0JrQjtJQUNJLGFBQUE7RUNkdEI7RURtQlU7SUFDSSxXQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VDakJkO0VEbUJjO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQ2pCbEI7RURvQmM7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUNsQmxCO0VEc0JVO0lBQ0ksU0FBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VDcEJkO0FBQ0Y7QUR3Qkk7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDdEJSO0FEd0JRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ3RCWjtBRHlCUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUN2Qlo7QUQwQlE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUN4Qlo7QUQwQlk7RUFDSSx1REFBQTtBQ3hCaEI7QUQwQmdCO0VBQ0ksVUFBQTtBQ3hCcEI7QUQwQm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMkJBQUE7S0FBQSx3QkFBQTtBQ3hCeEI7QUQyQm9CO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUN6QnhCO0FEMkJ3QjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ3pCNUI7QUQ0QndCO0VBQ0ksVUFBQTtBQzFCNUI7QUQrQmdCO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDN0JwQjtBRGtDUTtFQXJFSjtJQXNFUSxrQkFBQTtFQy9CVjtFRGlDVTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQy9CZDtFRGtDVTtJQUNJLGlCQUFBO0VDaENkO0VEbUNVO0lBQ0ksZUFBQTtFQ2pDZDtFRG9DVTtJQUNJLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxpQkFBQTtFQ2xDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xyXG4gICAgLmNhcm91c2VsLWhlYWRlciB7XHJcbiAgICAgICAgLnBpY3N1bS1pbWctd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG5cclxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLnNlY29uZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhlYWRlci1jYXB0aW9uIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0b3A6IDk1cHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICAgICAgbGVmdDogMzQlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2Fyb3VzZWwtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDMwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDQ1JTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0b3A6IDMxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLnBpY3N1bS1pbWctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IC0zNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDE4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuZmlyc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1jYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogYXV0bztcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAzNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2Fyb3VzZWwtYWN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDY1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdlbmVyYWwtaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gMTJyZW0gMDtcclxuXHJcbiAgICAgICAgLndlbGNvbWluZyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLndlbGNvbWluZy10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VydmljZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2MHB4IDBweDtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAzNXB4O1xyXG4gICAgICAgICAgICBncmlkLXJvdy1nYXA6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICBuYi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbmItY2FyZC1ib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMTIlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOC4ycmVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuOHMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdRdWF0dHJvY2VudG8nLCBzZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbmItY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLndlbGNvbWluZyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gOHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLndlbGNvbWluZy10ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlcnZpY2VzIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ob21lIC5jYXJvdXNlbC1oZWFkZXIgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuLmhvbWUgLmNhcm91c2VsLWhlYWRlciAucGljc3VtLWltZy13cmFwcGVyIC5iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQlO1xufVxuLmhvbWUgLmNhcm91c2VsLWhlYWRlciAucGljc3VtLWltZy13cmFwcGVyIC5iYWNrZ3JvdW5kLnNlY29uZCB7XG4gIG1hcmdpbi1sZWZ0OiAyNiU7XG59XG4uaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5waWNzdW0taW1nLXdyYXBwZXIgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMC4yO1xufVxuLmhvbWUgLmNhcm91c2VsLWhlYWRlciAuaGVhZGVyLWNhcHRpb24ge1xuICBtYXgtd2lkdGg6IDUzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogOTVweDtcbiAgYm90dG9tOiBhdXRvO1xuICBsZWZ0OiAzNCU7XG59XG4uaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5oZWFkZXItY2FwdGlvbiBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4uaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5oZWFkZXItY2FwdGlvbiBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI2cHg7XG59XG4uaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5jYXJvdXNlbC1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICB6LWluZGV4OiAxMDtcbiAgbWF4LXdpZHRoOiA0MzBweDtcbiAgbGVmdDogNDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRvcDogMzEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5waWNzdW0taW1nLXdyYXBwZXIge1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5waWNzdW0taW1nLXdyYXBwZXIgLmJhY2tncm91bmQge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ob21lIC5jYXJvdXNlbC1oZWFkZXIgLnBpY3N1bS1pbWctd3JhcHBlciAuYmFja2dyb3VuZC5maXJzdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5oZWFkZXItY2FwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAxMDVweDtcbiAgfVxuICAuaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5oZWFkZXItY2FwdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICAuaG9tZSAuY2Fyb3VzZWwtaGVhZGVyIC5oZWFkZXItY2FwdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDM2cHg7XG4gIH1cbiAgLmhvbWUgLmNhcm91c2VsLWhlYWRlciAuY2Fyb3VzZWwtYWN0aW9ucyB7XG4gICAgbGVmdDogMjQlO1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDY1cHg7XG4gIH1cbn1cbi5ob21lIC5nZW5lcmFsLWluZm8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHJlbSAxMnJlbSAwO1xufVxuLmhvbWUgLmdlbmVyYWwtaW5mbyAud2VsY29taW5nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uaG9tZSAuZ2VuZXJhbC1pbmZvIC53ZWxjb21pbmctdGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmhvbWUgLmdlbmVyYWwtaW5mbyAuc2VydmljZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBwYWRkaW5nOiA2MHB4IDBweDtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzNXB4O1xuICBncmlkLXJvdy1nYXA6IDE1cHg7XG59XG4uaG9tZSAuZ2VuZXJhbC1pbmZvIC5zZXJ2aWNlcyBuYi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcbn1cbi5ob21lIC5nZW5lcmFsLWluZm8gLnNlcnZpY2VzIG5iLWNhcmQgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbi5ob21lIC5nZW5lcmFsLWluZm8gLnNlcnZpY2VzIG5iLWNhcmQgbmItY2FyZC1ib2R5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IDUwJSAxMiU7XG59XG4uaG9tZSAuZ2VuZXJhbC1pbmZvIC5zZXJ2aWNlcyBuYi1jYXJkIG5iLWNhcmQtYm9keSAuY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwYWRkaW5nOiA4LjJyZW0gMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWUgLmdlbmVyYWwtaW5mbyAuc2VydmljZXMgbmItY2FyZCBuYi1jYXJkLWJvZHkgLmNhcHRpb24gLnRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJRdWF0dHJvY2VudG9cIiwgc2VyaWY7XG59XG4uaG9tZSAuZ2VuZXJhbC1pbmZvIC5zZXJ2aWNlcyBuYi1jYXJkIG5iLWNhcmQtYm9keSAuY2FwdGlvbi5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5ob21lIC5nZW5lcmFsLWluZm8gLnNlcnZpY2VzIG5iLWNhcmQgbmItY2FyZC1mb290ZXIge1xuICBmb250LWZhbWlseTogXCJBYmhheWEgTGlicmVcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhvbWUgLmdlbmVyYWwtaW5mbyB7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICB9XG4gIC5ob21lIC5nZW5lcmFsLWluZm8gLndlbGNvbWluZyB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB9XG4gIC5ob21lIC5nZW5lcmFsLWluZm8gLmRpdmlkZXIge1xuICAgIG1hcmdpbjogMXJlbSA4cmVtO1xuICB9XG4gIC5ob21lIC5nZW5lcmFsLWluZm8gLndlbGNvbWluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgLmhvbWUgLmdlbmVyYWwtaW5mbyAuc2VydmljZXMge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtcm93LWdhcDogMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]
        }];
      }, {
        sidebarContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['container']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/photo-gallery/photo-gallery.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/photo-gallery/photo-gallery.component.ts ***!
    \****************************************************************/

  /*! exports provided: PhotoGalleryComponent */

  /***/
  function srcAppPagesPhotoGalleryPhotoGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function () {
      return PhotoGalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_data_services_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/data/services-data */
    "./src/app/@core/data/services-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @crystalui/angular-lightbox */
    "./node_modules/@crystalui/angular-lightbox/__ivy_ngcc__/fesm2015/crystalui-angular-lightbox.js");

    function PhotoGalleryComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PhotoGalleryComponent_div_6_Template_div_mouseover_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.hoveredElement = i_r2;
        })("mouseout", function PhotoGalleryComponent_div_6_Template_div_mouseout_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.hoveredElement = 0 - 1;
        })("click", function PhotoGalleryComponent_div_6_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.selectImage(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("image-", i_r2, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "assets/img/", ctx_r0.service.encoded_name, "/", image_r1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("counter", true)("closeButtonText", "Fechar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r0.hoveredElement == i_r2);
      }
    }

    var PhotoGalleryComponent = /*#__PURE__*/function () {
      function PhotoGalleryComponent(route, location) {
        _classCallCheck(this, PhotoGalleryComponent);

        this.route = route;
        this.location = location;
      }

      _createClass(PhotoGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            _this2.service = src_app_core_data_services_data__WEBPACK_IMPORTED_MODULE_1__["ServicesData"].find(function (item) {
              return item.encoded_name === params.encoded_name;
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "selectImage",
        value: function selectImage(index) {
          var element = document.getElementsByClassName("image-".concat(index))[0];
          element.click();
        }
      }]);

      return PhotoGalleryComponent;
    }();

    PhotoGalleryComponent.ɵfac = function PhotoGalleryComponent_Factory(t) {
      return new (t || PhotoGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    PhotoGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotoGalleryComponent,
      selectors: [["app-photo-gallery"]],
      decls: 7,
      vars: 2,
      consts: [[1, "photo-gallery"], [1, "service-title"], ["icon", "arrow-circle-left-outline", "status", "warning", 3, "click"], [1, "divider", "warning"], ["lightbox-group", ""], ["class", "image-container", 4, "ngFor", "ngForOf"], [1, "image-container"], ["lightbox", "", 3, "src", "counter", "closeButtonText"], [1, "caption", 3, "mouseover", "mouseout", "click"], [1, "text"]],
      template: function PhotoGalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoGalleryComponent_Template_nb_icon_click_2_listener() {
            return ctx.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PhotoGalleryComponent_div_6_Template, 5, 9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.service.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.service.images);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_5__["LightboxDirective"]],
      styles: [".photo-gallery[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem 12rem;\n}\n.photo-gallery[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n.photo-gallery[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.photo-gallery[_ngcontent-%COMP%]   .lightbox-group[_ngcontent-%COMP%] {\n  -moz-columns: 30em;\n       columns: 30em;\n  -moz-column-gap: 20px;\n       column-gap: 20px;\n}\n.photo-gallery[_ngcontent-%COMP%]   .lightbox-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n}\n.photo-gallery[_ngcontent-%COMP%]   .lightbox-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px;\n}\n.photo-gallery[_ngcontent-%COMP%]   .lightbox-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: all 0.8s ease;\n  top: 0;\n  cursor: pointer;\n}\n.photo-gallery[_ngcontent-%COMP%]   .lightbox-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  font-weight: 500;\n  font-family: \"Quattrocento\", serif;\n  position: absolute;\n  top: 46%;\n  left: 47%;\n}\n.photo-gallery[_ngcontent-%COMP%]   .lightbox-group[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .caption.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (max-width: 1024px) {\n  .photo-gallery[_ngcontent-%COMP%] {\n    padding: 40px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhvdG8tZ2FsbGVyeS9DOlxcVXNlcnNcXGpvbmF0XFxkZXZcXHZpY3Rvci1qdWxpby1sYW5kaW5nLXBhZ2Uvc3JjXFxhcHBcXHBhZ2VzXFxwaG90by1nYWxsZXJ5XFxwaG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9waG90by1nYWxsZXJ5L3Bob3RvLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDUjtBRENRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDQ1o7QURHSTtFQUNJLGtCQUFBO09BQUEsYUFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7QUNEUjtBRE9RO0VBR0ksa0JBQUE7RUFDQSxtQkFBQTtBQ1BaO0FEU1k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNQaEI7QURVWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtBQ1JoQjtBRFVnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNScEI7QURXZ0I7RUFDSSxVQUFBO0FDVHBCO0FEZUk7RUEvREo7SUFnRVEsa0JBQUE7RUNaTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWdhbGxlcnkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTJyZW07XHJcblxyXG4gICAgLnNlcnZpY2UtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICAgICAgIG5iLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlnaHRib3gtZ3JvdXAge1xyXG4gICAgICAgIGNvbHVtbnM6IDMwZW07XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuXHJcbiAgICAgICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIC8vIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvJywgc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDYlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQ3JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAxNXB4O1xyXG4gICAgfVxyXG59IiwiLnBob3RvLWdhbGxlcnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxMnJlbTtcbn1cbi5waG90by1nYWxsZXJ5IC5zZXJ2aWNlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ucGhvdG8tZ2FsbGVyeSAuc2VydmljZS10aXRsZSBuYi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waG90by1nYWxsZXJ5IC5saWdodGJveC1ncm91cCB7XG4gIGNvbHVtbnM6IDMwZW07XG4gIGNvbHVtbi1nYXA6IDIwcHg7XG59XG4ucGhvdG8tZ2FsbGVyeSAubGlnaHRib3gtZ3JvdXAgLmltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5waG90by1nYWxsZXJ5IC5saWdodGJveC1ncm91cCAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucGhvdG8tZ2FsbGVyeSAubGlnaHRib3gtZ3JvdXAgLmltYWdlLWNvbnRhaW5lciAuY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbiAgdG9wOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGhvdG8tZ2FsbGVyeSAubGlnaHRib3gtZ3JvdXAgLmltYWdlLWNvbnRhaW5lciAuY2FwdGlvbiAudGV4dCB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlF1YXR0cm9jZW50b1wiLCBzZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ2JTtcbiAgbGVmdDogNDclO1xufVxuLnBob3RvLWdhbGxlcnkgLmxpZ2h0Ym94LWdyb3VwIC5pbWFnZS1jb250YWluZXIgLmNhcHRpb24uc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBob3RvLWdhbGxlcnkge1xuICAgIHBhZGRpbmc6IDQwcHggMTVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photo-gallery',
          templateUrl: './photo-gallery.component.html',
          styleUrls: ['./photo-gallery.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/photo-gallery/photo-gallery.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/photo-gallery/photo-gallery.module.ts ***!
    \*************************************************************/

  /*! exports provided: PhotoGalleryModule */

  /***/
  function srcAppPagesPhotoGalleryPhotoGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoGalleryModule", function () {
      return PhotoGalleryModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./photo-gallery.component */
    "./src/app/pages/photo-gallery/photo-gallery.component.ts");
    /* harmony import */


    var _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @crystalui/angular-lightbox */
    "./node_modules/@crystalui/angular-lightbox/__ivy_ngcc__/fesm2015/crystalui-angular-lightbox.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var PhotoGalleryModule = function PhotoGalleryModule() {
      _classCallCheck(this, PhotoGalleryModule);
    };

    PhotoGalleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PhotoGalleryModule
    });
    PhotoGalleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PhotoGalleryModule_Factory(t) {
        return new (t || PhotoGalleryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_3__["CrystalLightboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PhotoGalleryModule, {
        declarations: [_photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__["PhotoGalleryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_3__["CrystalLightboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoGalleryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_photo_gallery_component__WEBPACK_IMPORTED_MODULE_2__["PhotoGalleryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crystalui_angular_lightbox__WEBPACK_IMPORTED_MODULE_3__["CrystalLightboxModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/portfolio/portfolio.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
    \********************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppPagesPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_data_services_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@core/data/services-data */
    "./src/app/@core/data/services-data.ts");
    /* harmony import */


    var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-device-detector */
    "./node_modules/ngx-device-detector/__ivy_ngcc__/fesm2015/ngx-device-detector.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-responsive-carousel */
    "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var _c0 = function _c0(a0) {
      return {
        "object-position": a0
      };
    };

    function PortfolioComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_8_Template_nb_card_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var service_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.navigateServiceDetails(service_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-body");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function PortfolioComponent_div_8_Template_div_mouseover_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.hoveredElement = i_r2;
        })("mouseout", function PortfolioComponent_div_8_Template_div_mouseout_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.hoveredElement = 0 - 1;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Veja a galeria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nb-card-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "assets/img/", service_r1.encoded_name, "/", service_r1.imgBanner, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, service_r1.customObjectPosition));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r0.hoveredElement == i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r1.name);
      }
    }

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent(deviceService, router) {
        _classCallCheck(this, PortfolioComponent);

        this.deviceService = deviceService;
        this.router = router;
        this.isMobile = false;
        this.services = src_app_core_data_services_data__WEBPACK_IMPORTED_MODULE_1__["ServicesData"];
      }

      _createClass(PortfolioComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isMobile = this.deviceService.isMobile() || window.innerWidth <= 768;
        }
      }, {
        key: "navigateServiceDetails",
        value: function navigateServiceDetails(service) {
          this.router.navigate(['portfolio/detalhes/', service.encoded_name]);
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      hostBindings: function PortfolioComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PortfolioComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 9,
      vars: 7,
      consts: [[1, "portfolio"], [1, "welcoming"], [1, "divider", "warning"], [1, "welcoming-text"], [1, "categories"], [3, "height", "cellWidth", "margin", "cellsToShow", "arrowsTheme", "arrowsOutside"], ["class", "carousel-cell", 4, "ngFor", "ngForOf"], [1, "carousel-cell"], ["size", "small", 3, "click"], [3, "src", "ngStyle"], [1, "caption", 3, "mouseover", "mouseout"], [1, "text"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Minhas especialidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Clique em uma categoria abaixo para ver a galeria de fotos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "carousel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PortfolioComponent_div_8_Template, 9, 8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 350)("cellWidth", 340)("margin", 35)("cellsToShow", ctx.isMobile ? 1 : 3)("arrowsTheme", "dark")("arrowsOutside", ctx.isMobile ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardFooterComponent"]],
      styles: [".portfolio[_ngcontent-%COMP%] {\n  display: block;\n  justify-content: center;\n  text-align: center;\n  padding: 2rem 12rem;\n}\n.portfolio[_ngcontent-%COMP%]   .welcoming[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.5rem;\n}\n.portfolio[_ngcontent-%COMP%]   .welcoming-text[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.04) !important;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 50% 12%;\n     object-position: 50% 12%;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  opacity: 0;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 8.2rem 0;\n  transition: all 0.8s ease;\n  cursor: pointer;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n  font-weight: 500;\n  font-family: \"Quattrocento\", serif;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]   .caption.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%] {\n  border-top: 0;\n  font-family: \"Abhaya Libre\", serif;\n  font-weight: 500;\n  font-size: 1.4rem;\n  padding: 1rem 1.5rem;\n}\n@media screen and (max-width: 768px) {\n  .portfolio[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL0M6XFxVc2Vyc1xcam9uYXRcXGRldlxcdmljdG9yLWp1bGlvLWxhbmRpbmctcGFnZS9zcmNcXGFwcFxccGFnZXNcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdJO0VBQ0ksZUFBQTtBQ0RSO0FESVk7RUFDSSx1REFBQTtBQ0ZoQjtBRElnQjtFQUNJLFVBQUE7QUNGcEI7QURJb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwyQkFBQTtLQUFBLHdCQUFBO0FDRnhCO0FES29CO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNIeEI7QURLd0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNINUI7QURNd0I7RUFDSSxVQUFBO0FDSjVCO0FEU2dCO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDUHBCO0FEYUk7RUFyRUo7SUFzRVEsa0JBQUE7RUNWTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMTJyZW07XHJcblxyXG4gICAgLndlbGNvbWluZyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAud2VsY29taW5nLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3JpZXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuXHJcbiAgICAgICAgLmNhcm91c2VsIHtcclxuICAgICAgICAgICAgbmItY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA0KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgIG5iLWNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEyJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDguMnJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjhzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUXVhdHRyb2NlbnRvJywgc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5iLWNhcmQtZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxuICAgIH1cclxufSIsIi5wb3J0Zm9saW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxMnJlbTtcbn1cbi5wb3J0Zm9saW8gLndlbGNvbWluZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnBvcnRmb2xpbyAud2VsY29taW5nLXRleHQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wb3J0Zm9saW8gLmNhdGVnb3JpZXMge1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG4ucG9ydGZvbGlvIC5jYXRlZ29yaWVzIC5jYXJvdXNlbCBuYi1jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcbn1cbi5wb3J0Zm9saW8gLmNhdGVnb3JpZXMgLmNhcm91c2VsIG5iLWNhcmQgbmItY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMDtcbn1cbi5wb3J0Zm9saW8gLmNhdGVnb3JpZXMgLmNhcm91c2VsIG5iLWNhcmQgbmItY2FyZC1ib2R5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IDUwJSAxMiU7XG59XG4ucG9ydGZvbGlvIC5jYXRlZ29yaWVzIC5jYXJvdXNlbCBuYi1jYXJkIG5iLWNhcmQtYm9keSAuY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBwYWRkaW5nOiA4LjJyZW0gMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBvcnRmb2xpbyAuY2F0ZWdvcmllcyAuY2Fyb3VzZWwgbmItY2FyZCBuYi1jYXJkLWJvZHkgLmNhcHRpb24gLnRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJRdWF0dHJvY2VudG9cIiwgc2VyaWY7XG59XG4ucG9ydGZvbGlvIC5jYXRlZ29yaWVzIC5jYXJvdXNlbCBuYi1jYXJkIG5iLWNhcmQtYm9keSAuY2FwdGlvbi5zaG93IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wb3J0Zm9saW8gLmNhdGVnb3JpZXMgLmNhcm91c2VsIG5iLWNhcmQgbmItY2FyZC1mb290ZXIge1xuICBib3JkZXItdG9wOiAwO1xuICBmb250LWZhbWlseTogXCJBYmhheWEgTGlicmVcIiwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wb3J0Zm9saW8ge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__["DeviceDetectorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/portfolio/portfolio.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/portfolio/portfolio.module.ts ***!
    \*****************************************************/

  /*! exports provided: PortfolioModule */

  /***/
  function srcAppPagesPortfolioPortfolioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
      return PortfolioModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../portfolio/portfolio.component */
    "./src/app/pages/portfolio/portfolio.component.ts");
    /* harmony import */


    var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-responsive-carousel */
    "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var PortfolioModule = function PortfolioModule() {
      _classCallCheck(this, PortfolioModule);
    };

    PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortfolioModule
    });
    PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortfolioModule_Factory(t) {
        return new (t || PortfolioModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, {
        declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/route-animations.ts":
  /*!*************************************!*\
    !*** ./src/app/route-animations.ts ***!
    \*************************************/

  /*! exports provided: slideInAnimation */

  /***/
  function srcAppRouteAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      display: 'flow-root'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))], {
      optional: true
    })])])]);
    /***/
  },

  /***/
  "./src/assets/smtp.js":
  /*!****************************!*\
    !*** ./src/assets/smtp.js ***!
    \****************************/

  /*! no static exports found */

  /***/
  function srcAssetsSmtpJs(module, exports) {
    /* SmtpJS.com - v3.0.0 */
    var Email = {
      send: function send(a) {
        return new Promise(function (n, e) {
          a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
            n(e);
          });
        });
      },
      ajaxPost: function ajaxPost(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }, a.send(n);
      },
      ajax: function ajax(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function () {
          var e = t.responseText;
          null != n && n(e);
        }, t.send();
      },
      createCORSRequest: function createCORSRequest(e, n) {
        var t = new XMLHttpRequest();
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jonat\dev\victor-julio-landing-page\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map