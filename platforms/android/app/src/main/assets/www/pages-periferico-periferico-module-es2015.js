(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-periferico-periferico-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periferico/periferico.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periferico/periferico.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    \n    <ion-title style=\"text-align: center;\">Perifericos<ion-fab bottom right style=\"margin-left: 5%;\">\n      <button (click)=\"show = !show\" ion-fab mini><ion-icon  name=\"add\"></ion-icon></button><!--Con este botón mostramos u ocultamos los campos-->\n    </ion-fab>\n  </ion-title>\n\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"text-align: center;\">\n  <div padding *ngIf=\"show\"><!--Comprobamos si la variable show esta en true, si es asi se muestran los campos-->\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.name\"></ion-input> <!--Mediante el atributo ngModel, este campo tendrá el valor del name-->\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Precio</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.price\"></ion-input> \n      </ion-item>\n      <ion-item>\n        <ion-label floating>Cantidad</ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"articulo.quantity\"></ion-input>\n      </ion-item>\n        <button (click)=\"savePeriferico()\" ion-button full>Guardar</button>\n        <button *ngIf=\"idSelected != 0\" (click)=\"removeSelectedPeriferico()\" ion-button full color=\"danger\">Borrar</button>\n        <!--Solo aparecerá si idSelected es diferente a 0, Mediante el atributo click, llamará a nuestra funcion de remove -->\n  </div>\n    <ion-list style=\"display: inline-grid; font-size: 90%; align-content: center;\">\n      <button   style=\"margin-bottom: 5px; font-size: 120%;\" ion-item *ngFor=\"let articulo of perifericos\" (click)=\"selectPeriferico(articulo.id)\">\n        Nombre: {{ articulo.name }} | Precio: {{articulo.price}} | Unidades: {{articulo.quantity}} \n      </button>  \n    </ion-list>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/periferico/periferico-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/periferico/periferico-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PerifericoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerifericoPageRoutingModule", function() { return PerifericoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _periferico_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./periferico.page */ "./src/app/pages/periferico/periferico.page.ts");




const routes = [
    {
        path: '',
        component: _periferico_page__WEBPACK_IMPORTED_MODULE_3__["PerifericoPage"]
    }
];
let PerifericoPageRoutingModule = class PerifericoPageRoutingModule {
};
PerifericoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerifericoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/periferico/periferico.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/periferico/periferico.module.ts ***!
  \*******************************************************/
/*! exports provided: PerifericoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerifericoPageModule", function() { return PerifericoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _periferico_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./periferico-routing.module */ "./src/app/pages/periferico/periferico-routing.module.ts");
/* harmony import */ var _periferico_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./periferico.page */ "./src/app/pages/periferico/periferico.page.ts");







let PerifericoPageModule = class PerifericoPageModule {
};
PerifericoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _periferico_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerifericoPageRoutingModule"]
        ],
        declarations: [_periferico_page__WEBPACK_IMPORTED_MODULE_6__["PerifericoPage"]]
    })
], PerifericoPageModule);



/***/ }),

/***/ "./src/app/pages/periferico/periferico.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/periferico/periferico.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmlmZXJpY28vcGVyaWZlcmljby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/periferico/periferico.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/periferico/periferico.page.ts ***!
  \*****************************************************/
/*! exports provided: PerifericoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerifericoPage", function() { return PerifericoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/Articulos.service */ "./src/app/services/Articulos.service.ts");




let PerifericoPage = class PerifericoPage {
    constructor(articulosService, navCtrl) {
        this.articulosService = articulosService;
        this.navCtrl = navCtrl;
        this.perifericos = [];
        this.articulo = { id: 0, name: null, quantity: null, price: null }; //Declaramos un objeto vacio 
        this.show = false;
        this.idSelected = 0;
        articulosService.getPerifericos()
            .subscribe(perifericos => { this.perifericos = perifericos; });
    }
    savePeriferico() {
        if (this.idSelected != 0) { //si es diferente a 0 actualizamos, sino creamos uno nuevo
            this.articulosService.updatePeriferico(this.articulo);
        }
        else {
            this.articulosService.savePeriferico(this.articulo);
        }
        this.clear();
    }
    selectPeriferico(id) {
        this.show = true;
        this.idSelected = id; //cogemos su id
        let receivedPeriferico; //declaramos un objeto vacio que será el que reciba la información  que seleccionamos
        this.articulosService.getPeriferico(id) //hacemos uso de la funcion de nuestro servicio
            .subscribe(articulo => {
            receivedPeriferico = articulo; //el objeto vacio recibe la variable
            this.articulo = receivedPeriferico; //Y se lo asignamos al objeto los valores que se han retornado del servicio
        });
    }
    removeSelectedPeriferico() {
        //Llamamos a la funcion remove de nuestro servicio, le pasamos el idselected y se borra 
        this.articulosService.removePeriferico(this.idSelected);
        this.clear();
    }
    clear() {
        //inicializamos los valores de las variables una vez hecha una acción
        this.show = false;
        this.idSelected = 0;
        this.articulo.name = null;
        this.articulo.id = null;
        this.articulo.quantity = null;
        this.articulo.price = null;
    }
};
PerifericoPage.ctorParameters = () => [
    { type: src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PerifericoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-periferico',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./periferico.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/periferico/periferico.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./periferico.page.scss */ "./src/app/pages/periferico/periferico.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_Articulos_service__WEBPACK_IMPORTED_MODULE_3__["ArticulosService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PerifericoPage);



/***/ })

}]);
//# sourceMappingURL=pages-periferico-periferico-module-es2015.js.map