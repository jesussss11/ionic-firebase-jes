(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movil-movil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movil/movil.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movil/movil.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMovilMovilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header style=\"text-align: center;\">\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title style=\"text-align: center;\">Móviles<ion-fab bottom right style=\"margin-left: 5%;\">\n      <button (click)=\"show = !show\" ion-fab mini><ion-icon  name=\"add\"></ion-icon></button>\n    </ion-fab>\n  </ion-title>\n\n   \n\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content style=\"text-align: center;\" >\n  <div padding *ngIf=\"show\">\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.name\"></ion-input> \n      </ion-item>\n      <ion-item>\n        <ion-label floating>Precio</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.price\"></ion-input> \n      </ion-item>\n      <ion-item>\n        <ion-label floating>Cantidad</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.quantity\"></ion-input>\n      </ion-item>\n        <button (click)=\"saveArticulo()\" ion-button full>Guardar</button>\n        <button *ngIf=\"idSelected != 0\" (click)=\"removeSelectedArticulo()\" ion-button full color=\"danger\">Borrar</button>\n        \n  </div>\n    <ion-list style=\"display: inline-grid; font-size: 90%; align-content: center;\">\n      <button  style=\"margin-bottom: 5px; font-size: 120%;\" ion-item *ngFor=\"let articulo of articulos\" (click)=\"selectArticulo(articulo.id)\">\n        Nombre: {{ articulo.name }} | Precio: {{articulo.price}} |Unidades: {{articulo.quantity}}\n      </button>  \n    </ion-list>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/movil/movil-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/movil/movil-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MovilPageRoutingModule */

  /***/
  function srcAppPagesMovilMovilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovilPageRoutingModule", function () {
      return MovilPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _movil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./movil.page */
    "./src/app/pages/movil/movil.page.ts");

    const routes = [{
      path: '',
      component: _movil_page__WEBPACK_IMPORTED_MODULE_3__["MovilPage"]
    }];
    let MovilPageRoutingModule = class MovilPageRoutingModule {};
    MovilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MovilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/movil/movil.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/movil/movil.module.ts ***!
    \*********************************************/

  /*! exports provided: MovilPageModule */

  /***/
  function srcAppPagesMovilMovilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovilPageModule", function () {
      return MovilPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _movil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./movil-routing.module */
    "./src/app/pages/movil/movil-routing.module.ts");
    /* harmony import */


    var _movil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./movil.page */
    "./src/app/pages/movil/movil.page.ts");

    let MovilPageModule = class MovilPageModule {};
    MovilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _movil_routing_module__WEBPACK_IMPORTED_MODULE_5__["MovilPageRoutingModule"]],
      declarations: [_movil_page__WEBPACK_IMPORTED_MODULE_6__["MovilPage"]]
    })], MovilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/movil/movil.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/movil/movil.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMovilMovilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmlsL21vdmlsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/movil/movil.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/movil/movil.page.ts ***!
    \*******************************************/

  /*! exports provided: MovilPage */

  /***/
  function srcAppPagesMovilMovilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovilPage", function () {
      return MovilPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/Articulos.service */
    "./src/app/services/Articulos.service.ts");

    let MovilPage = class MovilPage {
      constructor(articulosService, navCtrl) {
        this.articulosService = articulosService;
        this.navCtrl = navCtrl;
        this.articulos = [];
        this.articulo = {
          id: 0,
          name: null,
          quantity: null,
          price: null
        };
        this.show = false;
        this.idSelected = 0;
        articulosService.getArticulos().subscribe(articulos => {
          this.articulos = articulos;
        });
      }

      saveArticulo() {
        if (this.idSelected != 0) {
          this.articulosService.updateArticulo(this.articulo);
        } else {
          this.articulosService.saveArticulo(this.articulo);
        }

        this.clear();
      }

      selectArticulo(id) {
        this.show = true;
        this.idSelected = id;
        let receivedArticulo;
        this.articulosService.getArticulo(id).subscribe(articulo => {
          receivedArticulo = articulo;
          this.articulo = receivedArticulo;
        });
      }

      removeSelectedArticulo() {
        this.articulosService.removeArticulo(this.idSelected);
        this.clear();
      }

      clear() {
        this.show = false;
        this.idSelected = 0;
        this.articulo.name = null;
        this.articulo.id = null;
        this.articulo.quantity = null;
        this.articulo.price = null;
      }

    };

    MovilPage.ctorParameters = () => [{
      type: src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    MovilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movil/movil.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movil.page.scss */
      "./src/app/pages/movil/movil.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], MovilPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-movil-movil-module-es5.js.map