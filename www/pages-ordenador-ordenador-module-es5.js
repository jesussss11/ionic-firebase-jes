(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ordenador-ordenador-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordenador/ordenador.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordenador/ordenador.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdenadorOrdenadorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title style=\"text-align: center;\">Ordenadores<ion-fab bottom right style=\"margin-left: 5%;\">\n      <button (click)=\"show = !show\" ion-fab mini><ion-icon  name=\"add\"></ion-icon></button>\n    </ion-fab>\n  </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  style=\"text-align: center;\">\n  <div padding *ngIf=\"show\">\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.name\"></ion-input> \n      </ion-item>\n      <ion-item>\n        <ion-label floating>Precio</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.price\"></ion-input> \n      </ion-item>\n      <ion-item>\n        <ion-label floating>Cantidad</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.quantity\"></ion-input>\n      </ion-item>\n        <button (click)=\"saveOrdenador()\" ion-button full>Guardar</button>\n        <button *ngIf=\"idSelected != 0\" (click)=\"removeSelectedOrdenador()\" ion-button full color=\"danger\">Borrar</button>\n        \n  </div>\n    <ion-list style=\"display: inline-grid; font-size: 90%; align-content: center;\">\n      <button  style=\"margin-bottom: 5px; font-size: 120%;\" ion-item *ngFor=\"let articulo of ordenadores\" (click)=\"selectOrdenador(articulo.id)\"><!--Recorremos el array fruits que hemos cargado en el constructor home.ts-->\n        Nombre: {{ articulo.name }} | Precio: {{articulo.price}} |Unidades: {{articulo.quantity}} \n      </button>  \n    </ion-list>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/ordenador/ordenador-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/ordenador/ordenador-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrdenadorPageRoutingModule */

  /***/
  function srcAppPagesOrdenadorOrdenadorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdenadorPageRoutingModule", function () {
      return OrdenadorPageRoutingModule;
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


    var _ordenador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ordenador.page */
    "./src/app/pages/ordenador/ordenador.page.ts");

    const routes = [{
      path: '',
      component: _ordenador_page__WEBPACK_IMPORTED_MODULE_3__["OrdenadorPage"]
    }];
    let OrdenadorPageRoutingModule = class OrdenadorPageRoutingModule {};
    OrdenadorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdenadorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/ordenador/ordenador.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ordenador/ordenador.module.ts ***!
    \*****************************************************/

  /*! exports provided: OrdenadorPageModule */

  /***/
  function srcAppPagesOrdenadorOrdenadorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdenadorPageModule", function () {
      return OrdenadorPageModule;
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


    var _ordenador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ordenador-routing.module */
    "./src/app/pages/ordenador/ordenador-routing.module.ts");
    /* harmony import */


    var _ordenador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ordenador.page */
    "./src/app/pages/ordenador/ordenador.page.ts");

    let OrdenadorPageModule = class OrdenadorPageModule {};
    OrdenadorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ordenador_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdenadorPageRoutingModule"]],
      declarations: [_ordenador_page__WEBPACK_IMPORTED_MODULE_6__["OrdenadorPage"]]
    })], OrdenadorPageModule);
    /***/
  },

  /***/
  "./src/app/pages/ordenador/ordenador.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/ordenador/ordenador.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdenadorOrdenadorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVuYWRvci9vcmRlbmFkb3IucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/ordenador/ordenador.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/ordenador/ordenador.page.ts ***!
    \***************************************************/

  /*! exports provided: OrdenadorPage */

  /***/
  function srcAppPagesOrdenadorOrdenadorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdenadorPage", function () {
      return OrdenadorPage;
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

    let OrdenadorPage = class OrdenadorPage {
      constructor(articulosService, navCtrl) {
        this.articulosService = articulosService;
        this.navCtrl = navCtrl;
        this.ordenadores = [];
        this.articulo = {
          id: 0,
          name: null,
          quantity: null,
          price: null
        };
        this.show = false;
        this.idSelected = 0;
        articulosService.getOrdenadores().subscribe(ordenadores => {
          this.ordenadores = ordenadores;
        });
      }

      saveOrdenador() {
        if (this.idSelected != 0) {
          this.articulosService.updateOrdenador(this.articulo);
        } else {
          this.articulosService.saveOrdenador(this.articulo);
        }

        this.clear();
      }

      selectOrdenador(id) {
        this.show = true;
        this.idSelected = id;
        let receivedOrdenador;
        this.articulosService.getOrdenador(id).subscribe(articulo => {
          receivedOrdenador = articulo;
          this.articulo = receivedOrdenador;
        });
      }

      removeSelectedOrdenador() {
        this.articulosService.removeOrdenador(this.idSelected);
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

    OrdenadorPage.ctorParameters = () => [{
      type: src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    OrdenadorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ordenador',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ordenador.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ordenador/ordenador.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ordenador.page.scss */
      "./src/app/pages/ordenador/ordenador.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], OrdenadorPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-ordenador-ordenador-module-es5.js.map