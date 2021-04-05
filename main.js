(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Samu\Desktop\Electrodomesticos\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class NavbarComponent {
    constructor() {
        //imagen especial
        this.limpiarImg = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendresultadosCosmeticos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enviarPeso = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enviarAncho = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enviarLargo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enviarAlto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enviarVistabtnEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.limpiarBusqueda = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.boleano = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.result = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nombre = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.bolean = true;
    }
    ngOnInit() {
        // console.log(this.bolean);
    }
    buscar() {
        //limpiar resultado 
        this.sumaGetdomesctico = 0;
        this.sumaGetpeso = 0;
        this.sumaGetancho = 0;
        this.sumaGetlargo = 0;
        this.sumaGetalto = 0;
        const result = this.inventarioRecibido.filter(nombre => nombre.nombre_del_equipo == this.nombre.value);
        // console.log("resultado", result);
        if (result.length > 0) {
            this.bolean = false;
            //saca el boleano al padre
            this.boleano.emit(this.bolean);
            this.result.emit(result);
            // console.log("bolean true: ", this.bolean);
            // console.log("resutado puntoled: ", result.length);
        }
        else if (result.length == 0) {
            this.bolean = true;
            //saca el boleano al padre
            this.boleano.emit(this.bolean);
            alert("No se han encontrado resultados para tu búsqueda" + " " + ": '" + this.nombre.value + " '");
            //limpiar busqueda
        }
        this.busquedarecibida = result.length;
        this.limpiarBusqueda.emit(this.busquedarecibida);
        for (var z = 0; z < result.length; z++) {
            this.sumaGetdomesctico = this.sumaGetdomesctico + result[z].consumo_energetico;
            this.sumaGetpeso = this.sumaGetpeso + result[z].pesoKg;
            this.sumaGetancho = this.sumaGetancho + result[z].anchoCm;
            this.sumaGetlargo = this.sumaGetlargo + result[z].largoCm;
            this.sumaGetalto = this.sumaGetalto + result[z].alturaCm;
        }
        this.sendresultadosCosmeticos.emit(this.sumaGetdomesctico);
        this.enviarPeso.emit(this.sumaGetpeso);
        this.enviarAncho.emit(this.sumaGetancho);
        this.enviarLargo.emit(this.sumaGetlargo);
        this.enviarAlto.emit(this.sumaGetalto);
    }
    detenerEdit() {
        //cambiar boton editar a registrar
        this.vista_editnav = true;
        this.enviarVistabtnEdit.emit(this.vista_editnav);
        //no vaya a editar
        this.vistaEdit = true;
        this.sendEdit.emit(this.vistaEdit);
        if (this.navEditformcontrol['controls'] == undefined) {
            //imagen enviada al fromulario
            // this.imagenObtenida = '';
            // this.limpiarImg.emit(this.imagenObtenida);
        }
        else {
            this.navEditformcontrol['controls']['nombre_del_equipo'].patchValue('');
            this.navEditformcontrol['controls']['descripcion'].patchValue('');
            this.navEditformcontrol['controls']['consumo_energetico'].patchValue('');
            this.navEditformcontrol['controls']['pesoKg'].patchValue('');
            this.navEditformcontrol['controls']['anchoCm'].patchValue('');
            this.navEditformcontrol['controls']['largoCm'].patchValue('');
            this.navEditformcontrol['controls']['alturaCm'].patchValue('');
            // imagenObtenida
            // imagenRecibidaPa
            // limpiarImg
            // this.navEditformcontrol['controls']['imgprev']  = '';
            // this.navEditformcontrol['controls']['imgprev'].patchValue('assets/img/box.png');
            // console.log("a ver: ", this.navEditformcontrol['controls']['imgprev'])
            // this.navEditformcontrol['controls']['imgprev'].reset('');
            //imagen enviada al fromulario
            // this.imagenObtenida = '';
            this.limpiarImg.emit(this.imagenObtenida);
        }
        //limipiano al editar y luego ir al agregar
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { vistaEdit: "vistaEdit", busquedarecibida: "busquedarecibida", inventarioRecibido: "inventarioRecibido", vista_editnav: "vista_editnav", navEditformcontrol: "navEditformcontrol", imagenObtenida: "imagenObtenida", imagenRecibidaPa: "imagenRecibidaPa", sumaGetdomesctico: "sumaGetdomesctico", sumaGetpeso: "sumaGetpeso", sumaGetancho: "sumaGetancho", sumaGetlargo: "sumaGetlargo", sumaGetalto: "sumaGetalto" }, outputs: { limpiarImg: "limpiarImg", sendresultadosCosmeticos: "sendresultadosCosmeticos", enviarPeso: "enviarPeso", enviarAncho: "enviarAncho", enviarLargo: "enviarLargo", enviarAlto: "enviarAlto", enviarVistabtnEdit: "enviarVistabtnEdit", sendEdit: "sendEdit", limpiarBusqueda: "limpiarBusqueda", boleano: "boleano", result: "result" }, decls: 14, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg_blue"], ["href", "#", 1, "navbar-brand", "title"], [1, "fas", "fa-bolt", "icon_nav"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "form-inline", "my-2", "my-lg-0", "d-flex", "justify-content-center"], ["type", "search", "placeholder", "Buscar", "aria-label", "Search", 1, "form-control", "mr-sm-2", "search_size", 3, "formControl", "keyup.enter"], ["type", "button", 1, "btn", "btn_white", "mr-2", 3, "click"], [1, "fas", "fa-search"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn_white", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Electrodom\u00E9sticos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_9_listener() { return ctx.buscar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_10_listener() { return ctx.buscar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_12_listener() { return ctx.detenerEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.nombre);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".search_size[_ngcontent-%COMP%]{\r\n\twidth: 400px;\r\n}\r\n@media(max-width: 575px){\r\n\t.search_size[_ngcontent-%COMP%]{\r\n\t\twidth: 81%;\r\n\t\tmargin-right: 10px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQztFQUNDLFVBQVU7RUFDVixrQkFBa0I7Q0FDbkI7QUFDRCIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hfc2l6ZXtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNTc1cHgpe1xyXG5cdC5zZWFyY2hfc2l6ZXtcclxuXHRcdHdpZHRoOiA4MSU7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/formulario/formulario.component */ "UYHe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registro del Electrodom\u00E9sticos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_h5_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Editar Electrodom\u00E9sticos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_5_h5_1_Template, 2, 0, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.titleEdit);
} }
function AppComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.busquedaSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mostrar solo seleccionados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.volver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No se han registrado Electrodom\u00E9sticos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Titulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Peso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Anchura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Largo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Altura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo Electrico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_34_div_3_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.editar(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_34_div_3_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.eliminar(i_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_34_div_3_Template_input_click_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const i_r14 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.checkbusqueda(i_r14, $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "seleccionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r13.imgprev, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.nombre_del_equipo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.pesoKg, " kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.anchoCm, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.largoCm, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.alturaCm, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.consumo_energetico, " w");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", i_r14);
} }
function AppComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_34_div_2_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_34_div_3_Template, 46, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.inventario.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.inventario);
} }
function AppComponent_div_35_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Titulo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Peso:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Anchura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Largo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Altura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Consumo Electrico:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Descripci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r20.imgprev, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.nombre_del_equipo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.pesoKg, " kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.anchoCm, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.largoCm, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.alturaCm, " cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.consumo_energetico, " w");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.descripcion, " ");
} }
function AppComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_35_div_3_Template, 35, 8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Resultado de la busqueda: ", ctx_r5.resultBusqueda, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.result);
} }
// import { trigger, style, transition, animate, state } from '@angular/animations';
class AppComponent {
    constructor() {
        this.title = 'Electrodomesticos';
        this.resultencontrado = [];
        this.inventario = [];
        this.result = [];
        this.resultNo = [];
        this.resultSelect = [];
        this.vista = true;
        this.titleEdit = true;
        this.resultBusqueda = 0;
        this.formulario = {
            nombre_del_equipo: '',
            descripcion: '',
            consumo_energetico: 0,
            pesoKg: 0,
            anchoCm: 0,
            largoCm: 0,
            alturaCm: 0,
            imgprev: 0,
            check: false,
        };
        this.sumadomestico = 0;
        this.sumapeso = 0;
        this.sumaancho = 0;
        this.sumalargo = 0;
        this.sumaalto = 0;
        this.formularioControl = '';
    }
    formulariogroup(e) {
        this.formularioControl = e;
        // console.error(e,this.formularioControl['controls'])
    }
    //recibe del formulario un arreglo
    // mensaje = parametro hijo recibido
    boleano(boleano) {
        this.vista = boleano;
    }
    resultado(resultado) {
        this.result = resultado;
        // console.log(resultado);
    }
    procesaPropagar(mensaje) {
        // determinar el dato obtenido
        // console.log(mensaje);
        this.inventario = mensaje;
    }
    vistaform(vistaform) {
        this.vista = vistaform;
    }
    checkbusqueda(i, event) {
        this.inventario[i].check = event;
    }
    eliminar(index) {
        this.inventario.splice(index, 1);
        if (this.result.length > 0) {
            this.result.splice(index, 1);
        }
    }
    editar(index) {
        //cambia el boton registrar por el boton edit
        this.vistabtn_edit = false;
        //pasa la posicion al formulario 
        this.formEdit = index;
        this.formularioControl['controls']['nombre_del_equipo'].patchValue(this.inventario[index].nombre_del_equipo);
        this.formularioControl['controls']['descripcion'].patchValue(this.inventario[index].descripcion);
        this.formularioControl['controls']['consumo_energetico'].patchValue(this.inventario[index].consumo_energetico);
        this.formularioControl['controls']['pesoKg'].patchValue(this.inventario[index].pesoKg);
        this.formularioControl['controls']['anchoCm'].patchValue(this.inventario[index].anchoCm);
        this.formularioControl['controls']['largoCm'].patchValue(this.inventario[index].largoCm);
        this.formularioControl['controls']['alturaCm'].patchValue(this.inventario[index].alturaCm);
        this.formularioControl['controls']['imgprev'].patchValue('');
        this.imagenpreviadelformulario = this.inventario[index].imgprev;
        this.imagenFormulario = this.inventario[index].imgprev;
        this.titleEdit = false;
    }
    busquedaSelect() {
        var resultcheck = this.inventario.filter(checkiando => checkiando.check == true);
        //limpiar el res
        this.resultNo = [];
        this.sumadomestico = 0;
        this.sumapeso = 0;
        this.sumaalto = 0;
        this.sumalargo = 0;
        this.sumaancho = 0;
        for (var k = 0; k < resultcheck.length; k++) {
            this.sumadomestico = this.sumadomestico + resultcheck[k].consumo_energetico;
            this.sumapeso = this.sumapeso + resultcheck[k].pesoKg;
            this.sumaalto = this.sumaalto + resultcheck[k].alturaCm;
            this.sumalargo = this.sumalargo + resultcheck[k].largoCm;
            this.sumaancho = this.sumaancho + resultcheck[k].anchoCm;
            // console.log("consumo_energetico:",thisyyyyyyyyyyyyyyyyyyyyy
            // console.log("this.sumapeso:",this.sumapeso);
            // console.log("this.sumaalto:",this.sumaalto);
            // console.log("this.sumalargo:",this.sumalargo);
            // console.log("this.sumaancho",this.sumaancho);
        }
        this.result = resultcheck;
        // vista para ver la busqueda
        this.vista = false;
        for (var i = 0; i < this.inventario.length; i++) {
            this.inventario[i].check = false;
        }
        this.resultBusqueda = this.result.length;
    }
    limpiandoBusqueNav(limpiar) {
        this.resultBusqueda = limpiar;
    }
    volver() {
        this.vista = true;
        this.resultBusqueda = 0;
        this.sumadomestico = 0;
        this.sumapeso = 0;
        this.sumaancho = 0;
        this.sumalargo = 0;
        this.sumaalto = 0;
    }
    sendEditrecibido(vistEditar) {
        this.titleEdit = vistEditar;
    }
    //resultado del consumo_energetico
    resultadoConsumo(consumo) {
        this.sumadomestico = consumo;
    }
    resultadoPeso(peso) {
        this.sumapeso = peso;
    }
    resultadoAncho(ancho) {
        this.sumaancho = ancho;
    }
    resultadoLargo(largo) {
        this.sumalargo = largo;
    }
    resultadoAlto(alto) {
        this.sumaalto = alto;
    }
    recibevistaEdit(editTrue) {
        this.vistabtn_edit = editTrue;
    }
    limpiandoImg(imagenNav) {
        this.limpiarNav = imagenNav;
    }
    enviaPreviaRecibida(imgprevget) {
        this.imagenpreviadelformulario = imgprevget;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 31, consts: [[3, "inventarioRecibido", "vistaEdit", "busquedarecibida", "sumaGetdomesctico", "sumaGetpeso", "sumaGetancho", "sumaGetlargo", "sumaGetalto", "vista_editnav", "navEditformcontrol", "imagenObtenida", "boleano", "result", "sendEdit", "limpiarBusqueda", "sendresultadosCosmeticos", "enviarPeso", "enviarAncho", "enviarLargo", "enviarAlto", "enviarVistabtnEdit", "limpiarImg"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], ["class", "modal-header bg_blue", 4, "ngIf"], ["class", "modal-header bg-warning", 4, "ngIf"], [3, "boleanocompa", "inventarioEdit", "editarForm", "formularioRecibido", "indexPosition", "vista_edit", "imagenRecibida", "tomatuImg", "limpiandoImagenEdit", "propagar", "inventarioInfoNew", "vistaform", "enviarImgprevio"], [1, "container-md"], [1, "my-4", "d-flex", "flex-wrap", "flex-md-column", "box_result"], [1, "d-flex", "flex-wrap", "box_result_title", "col-8", "col-md-12", "px-0"], [1, "mb-0", "col-md-4", "font_result", "text-center", "total_title"], [1, "mb-0", "col-md-2", "font_result", "text-center", "total_title"], [1, "d-flex", "flex-wrap", "col-4", "col-md-12", "px-0"], [1, "mb-0", "col-md-4", "mx-auto", "text-center", "total_line"], [1, "mb-0", "col-md-2", "mx-auto", "text-center", "total_line"], ["type", "button", "class", "btn btn_primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "container-md", 4, "ngIf"], [1, "modal-header", "bg_blue"], ["id", "exampleModalLabel", 1, "modal-title", "text-white"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", "btn_close"], ["aria-hidden", "true", 1, "icon_close"], [1, "modal-header", "bg-warning"], ["class", "modal-title text-white", "id", "exampleModalLabel", 4, "ngIf"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["type", "button", 1, "btn", "btn_primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["class", "bg_inventario d-flex", 4, "ngIf"], ["class", "d-flex flex-wrap electro_box my-4", 4, "ngFor", "ngForOf"], [1, "bg_inventario", "d-flex"], [1, "m-auto", "text_nohay", "text-center"], [1, "d-flex", "flex-wrap", "electro_box", "my-4"], [1, "container_img", "d-flex"], ["alt", "", 1, "img_size", "my-auto", 3, "src"], [1, "content_box", "d-flex", "flex-wrap"], [1, "h6", "col-sm-12", "col-md-12", "line"], [1, "electro_title"], [1, "h6", "col-6", "col-sm-6", "col-md-4", "line"], [1, "h6", "col-12", "col-sm-12", "col-md-8", "line"], [1, "d-flex", "flex-column", "col-12"], [1, "box_description", 2, "min-width", "100%"], [1, "h6"], [1, "text_description"], [1, "box_buttom", "d-flex", 2, "min-width", "100%"], [1, "ml-auto"], ["type", "buttton", "data-toggle", "modal", "data-target", "#exampleModal", 1, "btn", "btn_primary", "mx-2", 3, "click"], ["type", "buttton", 1, "btn", "btn_secondary", "ml-2", 3, "click"], [1, "ml-auto", "select"], [1, "mr-2"], ["type", "checkbox", 1, "p-2", "mr-2", 3, "id", "click"], [3, "for"], [1, "text-center", "my-3"], [1, "box_description", 2, "min-width", "100%", "min-height", "96px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("boleano", function AppComponent_Template_app_navbar_boleano_0_listener($event) { return ctx.boleano($event); })("result", function AppComponent_Template_app_navbar_result_0_listener($event) { return ctx.resultado($event); })("sendEdit", function AppComponent_Template_app_navbar_sendEdit_0_listener($event) { return ctx.sendEditrecibido($event); })("limpiarBusqueda", function AppComponent_Template_app_navbar_limpiarBusqueda_0_listener($event) { return ctx.limpiandoBusqueNav($event); })("sendresultadosCosmeticos", function AppComponent_Template_app_navbar_sendresultadosCosmeticos_0_listener($event) { return ctx.resultadoConsumo($event); })("enviarPeso", function AppComponent_Template_app_navbar_enviarPeso_0_listener($event) { return ctx.resultadoPeso($event); })("enviarAncho", function AppComponent_Template_app_navbar_enviarAncho_0_listener($event) { return ctx.resultadoAncho($event); })("enviarLargo", function AppComponent_Template_app_navbar_enviarLargo_0_listener($event) { return ctx.resultadoLargo($event); })("enviarAlto", function AppComponent_Template_app_navbar_enviarAlto_0_listener($event) { return ctx.resultadoAlto($event); })("enviarVistabtnEdit", function AppComponent_Template_app_navbar_enviarVistabtnEdit_0_listener($event) { return ctx.recibevistaEdit($event); })("limpiarImg", function AppComponent_Template_app_navbar_limpiarImg_0_listener($event) { return ctx.limpiandoImg($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 6, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-formulario", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("propagar", function AppComponent_Template_app_formulario_propagar_6_listener($event) { return ctx.procesaPropagar($event); })("inventarioInfoNew", function AppComponent_Template_app_formulario_inventarioInfoNew_6_listener($event) { return ctx.formulariogroup($event); })("vistaform", function AppComponent_Template_app_formulario_vistaform_6_listener($event) { return ctx.vistaform($event); })("enviarImgprevio", function AppComponent_Template_app_formulario_enviarImgprevio_6_listener($event) { return ctx.enviaPreviaRecibida($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total de consumo energetico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Total de Peso:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total de ancho:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total de largo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total de altura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppComponent_button_32_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_button_33_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_div_34_Template, 4, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_div_35_Template, 4, 2, "div", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inventarioRecibido", ctx.inventario)("vistaEdit", ctx.titleEdit)("busquedarecibida", ctx.resultBusqueda)("sumaGetdomesctico", ctx.sumadomestico)("sumaGetpeso", ctx.sumapeso)("sumaGetancho", ctx.sumaancho)("sumaGetlargo", ctx.sumalargo)("sumaGetalto", ctx.sumaalto)("vista_editnav", ctx.vistabtn_edit)("navEditformcontrol", ctx.formularioControl)("imagenObtenida", ctx.imagenFormulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titleEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.titleEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boleanocompa", ctx.vista)("inventarioEdit", ctx.inventario)("editarForm", ctx.formEdit)("formularioRecibido", ctx.formulario)("indexPosition", ctx.position)("vista_edit", ctx.vistabtn_edit)("imagenRecibida", ctx.imagenFormulario)("tomatuImg", ctx.imagenpreviadelformulario)("limpiandoImagenEdit", ctx.limpiarNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sumadomestico, " w");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sumapeso, " kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sumaancho, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sumalargo, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sumaalto, " cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vista);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vista);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vista);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vista);
    } }, directives: [_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _component_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_3__["FormularioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: [".img_size[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 170px;\r\n\tobject-fit: contain;\r\n}\r\n\r\n.container_img[_ngcontent-%COMP%]{\r\n\twidth: 170px;\r\n\tobject-fit: cover;\r\n\tborder-right: 2px solid black;\r\n\tpadding: 5px;\r\n}\r\n\r\n.electro_box[_ngcontent-%COMP%]{\r\n\tborder-radius: 10px;\r\n\tborder: 2px solid black;\r\n\theight:auto; \r\n}\r\n\r\n.bg_inventario[_ngcontent-%COMP%]{\r\n\tbackground-image: url('https://sam1dc.github.io/sam1dc.github.io-/003-cajas.png');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: contain;\r\n\theight: 300px;\r\n\twidth: 100%;\r\n\tmargin-top: 45px;\r\n\topacity: .7;\r\n}\r\n\r\n\r\n\r\n.text_nohay[_ngcontent-%COMP%]{\r\n\tcolor: black;\r\n\tfont-family: Gordita-Bold;\r\n\topacity: 1 !important;\r\n}\r\n\r\n.electro_title[_ngcontent-%COMP%]{\r\n\tfont-family: Gordita-Bold;\r\n}\r\n\r\n.h6[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 2px;\r\n}\r\n\r\n.content_box[_ngcontent-%COMP%]{\r\n\twidth: calc(100% - 170px);\r\n}\r\n\r\n.text_description[_ngcontent-%COMP%]{\r\n\tfont-size: 14px;\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.box_description[_ngcontent-%COMP%]{\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n}\r\n\r\n.box_buttom[_ngcontent-%COMP%]{\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n\tmargin-bottom: 0px;\r\n\tborder-bottom: 2px solid black;\r\n\tpadding-top: 5px;\r\n\tpadding-bottom: 5px;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]:nth-child(1){\r\n\tborder-bottom: 2px solid black;\r\n\tbackground: rgba(25, 118, 210, .6);\r\n\tborder-top-right-radius: 7px;\r\n\r\n}\r\n\r\n.line[_ngcontent-%COMP%]:nth-child(2){\r\n\tborder-right: 2px solid black;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]:nth-child(3){\r\n\tborder-right: 2px solid black;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]:nth-child(5){\r\n\tborder-right: 2px solid black;\r\n}\r\n\r\n.box_result[_ngcontent-%COMP%]{\r\n\tborder: 1px solid blue;\r\n    border-radius: 10px;\r\n    border: 2px solid black;\r\n}\r\n\r\n.box_result_title[_ngcontent-%COMP%]{\r\n\tborder-bottom: 2px solid black;\r\n\tbackground: rgba(25, 118, 210, .6);\r\n\tborder-top-right-radius: 7px;\r\n\tborder-top-left-radius: 7px;\r\n}\r\n\r\n.total_title[_ngcontent-%COMP%]{\r\n\tborder-right: 2px solid;\r\n}\r\n\r\n.total_title[_ngcontent-%COMP%]:nth-child(5){\r\n\tborder-right: 0px solid;\r\n}\r\n\r\n.total_line[_ngcontent-%COMP%]{\r\n\tborder-right: 2px solid;\r\n}\r\n\r\n.total_line[_ngcontent-%COMP%]:nth-child(5){\r\n\tborder-right: 0px solid;\r\n}\r\n\r\n.font_result[_ngcontent-%COMP%]{\r\n\tfont-family: Gordita-Bold;\r\n}\r\n\r\n.select[_ngcontent-%COMP%]{\r\n\tborder-top: 2px solid black;\r\n\tborder-left: 2px solid black;\r\n\tmargin-right: -15px;\r\n\tpadding-top: 5px;\r\n\tpadding-left: 5px;\r\n\tmargin-bottom: 0px;\r\n\r\n}\r\n\r\n@media (max-width: 767px) {\r\n\t.text_description[_ngcontent-%COMP%]{\r\n\t\tfont-size: 13.5px;\r\n\t}\r\n\t\r\n\t.line[_ngcontent-%COMP%]:nth-child(1){\r\n\t\tborder-bottom: 2px solid black;\r\n\t\tbackground: rgba(25, 118, 210, .6);\r\n\t\tborder-top-right-radius: 7px;\r\n\r\n\t}\r\n\t.line[_ngcontent-%COMP%]:nth-child(2){\r\n\t\tborder-right: 2px solid black;\r\n\t}\r\n\t.line[_ngcontent-%COMP%]:nth-child(3){\r\n\t\tborder-right: 0px solid black;\r\n\t}\r\n\r\n\t.line[_ngcontent-%COMP%]:nth-child(4){\r\n\t\tborder-right: 2px solid black;\r\n\t}\r\n\r\n\t.line[_ngcontent-%COMP%]:nth-child(5){\r\n\t\tborder-right: 0px solid black;\r\n\t}\r\n\r\n\t\r\n\t.box_result_title[_ngcontent-%COMP%]{\r\n\t\tborder-bottom: 0px solid black;\r\n\t\tborder-top-right-radius: 0px;\r\n\t\tborder-bottom-left-radius: 7px;\r\n\t\tborder-right: 2px solid black;\r\n\t}\r\n\t.total_title[_ngcontent-%COMP%]{\r\n\t\tborder-right: 0px solid;\r\n\t\tborder-bottom: 2px solid black;\r\n\t}\r\n\r\n\t.total_title[_ngcontent-%COMP%]:nth-child(5){\r\n\t\tborder-right: 0px solid;\r\n\t\tborder-bottom: 0px solid black;\r\n\t}\r\n\r\n\t.total_line[_ngcontent-%COMP%]{\r\n\t\tborder-right: 2px solid;\r\n\t}\r\n\r\n\t.total_line[_ngcontent-%COMP%]:nth-child(5){\r\n\t\tborder-right: 0px solid;\r\n\t}\r\n\r\n\t\r\n\t.total_line[_ngcontent-%COMP%]{\r\n\tborder-right: 0px solid black;\r\n\tborder-bottom: 2px solid black;\r\n\t}\r\n\t.total_line[_ngcontent-%COMP%]:nth-child(5){\r\n\tborder-right: 0px solid black;\r\n\tborder-bottom: 0px solid black;\r\n\t}\r\n\r\n}\r\n\r\n@media (max-width: 575px){\r\n\t.electro_box[_ngcontent-%COMP%]{\r\n\t\twidth: 100%;\r\n\t\tborder-radius: 10px;\r\n\t\tborder: 2px solid black;\r\n\t\theight:auto; \r\n\t}\r\n\r\n\t.content_box[_ngcontent-%COMP%]{\r\n\t\tdisplay: flex;\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t.img_size[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 140px;\r\n\tmargin: auto;\r\n\tobject-fit: contain;\r\n\t}\r\n\r\n\t.container_img[_ngcontent-%COMP%]{\r\n\t\twidth: 100%;\r\n\t\tobject-fit: cover;\r\n\t\tborder-right: 0px solid black;\r\n\t\tborder-bottom: 2px solid black;\r\n\t\tpadding: 5px;\r\n\t}\r\n\t.line[_ngcontent-%COMP%]:nth-child(1){\r\n\t\tborder-bottom: 2px solid black;\r\n\t\tbackground: rgba(25, 118, 210, .6);\r\n\t\tborder-top-right-radius: 0px;\r\n\t}\r\n\t.electro_title[_ngcontent-%COMP%]{\r\n\tfont-family: Gordita-Bold;\r\n\tfont-size: 15px;\r\n\t}\r\n\r\n\t.h6[_ngcontent-%COMP%]{\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 392px) {\r\n\t.total_line[_ngcontent-%COMP%]:nth-child(1){\r\n\t\theight: 42px;\r\n\t}\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLHNDQUFvRDtDQUNwRCw0QkFBNEI7Q0FDNUIsa0NBQWtDO0NBQ2xDLHdCQUF3QjtDQUN4QixhQUFhO0NBQ2IsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7Ozs7Ozs7OztHQVNHOztBQUVIO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7O0FBR0E7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLGdCQUFnQjtDQUNoQixtQkFBbUI7QUFDcEI7O0FBQ0E7Q0FDQyw4QkFBOEI7Q0FDOUIsa0NBQWtDO0NBQ2xDLDRCQUE0Qjs7QUFFN0I7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxzQkFBc0I7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixrQ0FBa0M7Q0FDbEMsNEJBQTRCO0NBQzVCLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFHQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsa0JBQWtCOztBQUVuQjs7QUFFQTtDQUNDO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyw0QkFBNEI7O0NBRTdCO0NBQ0E7RUFDQyw2QkFBNkI7Q0FDOUI7Q0FDQTtFQUNDLDZCQUE2QjtDQUM5Qjs7Q0FFQTtFQUNDLDZCQUE2QjtDQUM5Qjs7Q0FFQTtFQUNDLDZCQUE2QjtDQUM5Qjs7Q0FFQSxtQkFBbUI7Q0FDbkI7RUFDQyw4QkFBOEI7RUFDOUIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7Q0FDOUI7Q0FDQTtFQUNDLHVCQUF1QjtFQUN2Qiw4QkFBOEI7Q0FDL0I7O0NBRUE7RUFDQyx1QkFBdUI7RUFDdkIsOEJBQThCO0NBQy9COztDQUVBO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBLGtCQUFrQjtDQUNsQjtDQUNBLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUI7Q0FDQTtDQUNBLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUI7O0FBRUQ7O0FBRUE7Q0FDQztFQUNDLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixXQUFXO0NBQ1o7O0NBRUE7Q0FDQSxXQUFXO0NBQ1gsYUFBYTtDQUNiLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsWUFBWTtDQUNiO0NBQ0E7RUFDQyw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtDQUM3QjtDQUNBO0NBQ0EseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsWUFBWTtDQUNiO0FBQ0QiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX3NpemV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxNzBweDtcclxuXHRvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uY29udGFpbmVyX2ltZ3tcclxuXHR3aWR0aDogMTcwcHg7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZWxlY3Ryb19ib3h7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRoZWlnaHQ6YXV0bzsgXHJcbn1cclxuXHJcbi5iZ19pbnZlbnRhcmlve1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy8wMDMtY2FqYXMucG5nJyk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDQ1cHg7XHJcblx0b3BhY2l0eTogLjc7XHJcbn1cclxuXHJcbi8qIC5iZ19yZXN1bHR7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL3ZpZXcucG5nJyk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRoZWlnaHQ6IDIzMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi10b3A6IDQ1cHg7XHJcblx0b3BhY2l0eTogLjc7XHJcbn0gKi9cclxuXHJcbi50ZXh0X25vaGF5e1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHRmb250LWZhbWlseTogR29yZGl0YS1Cb2xkO1xyXG5cdG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5lbGVjdHJvX3RpdGxle1xyXG5cdGZvbnQtZmFtaWx5OiBHb3JkaXRhLUJvbGQ7XHJcbn1cclxuXHJcbi5oNntcclxuXHRtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5jb250ZW50X2JveHtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMTcwcHgpO1xyXG59XHJcblxyXG4udGV4dF9kZXNjcmlwdGlvbntcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYm94X2Rlc2NyaXB0aW9ue1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJveF9idXR0b217XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubGluZXtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdHBhZGRpbmctdG9wOiA1cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ubGluZTpudGgtY2hpbGQoMSl7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjUsIDExOCwgMjEwLCAuNik7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDdweDtcclxuXHJcbn1cclxuLmxpbmU6bnRoLWNoaWxkKDIpe1xyXG5cdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5saW5lOm50aC1jaGlsZCgzKXtcclxuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmxpbmU6bnRoLWNoaWxkKDUpe1xyXG5cdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYm94X3Jlc3VsdHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uYm94X3Jlc3VsdF90aXRsZXtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNSwgMTE4LCAyMTAsIC42KTtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLnRvdGFsX3RpdGxle1xyXG5cdGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4udG90YWxfdGl0bGU6bnRoLWNoaWxkKDUpe1xyXG5cdGJvcmRlci1yaWdodDogMHB4IHNvbGlkO1xyXG59XHJcblxyXG4udG90YWxfbGluZXtcclxuXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLnRvdGFsX2xpbmU6bnRoLWNoaWxkKDUpe1xyXG5cdGJvcmRlci1yaWdodDogMHB4IHNvbGlkO1xyXG59XHJcblxyXG5cclxuLmZvbnRfcmVzdWx0e1xyXG5cdGZvbnQtZmFtaWx5OiBHb3JkaXRhLUJvbGQ7XHJcbn1cclxuXHJcbi5zZWxlY3R7XHJcblx0Ym9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcblx0bWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuXHRwYWRkaW5nLXRvcDogNXB4O1xyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdC50ZXh0X2Rlc2NyaXB0aW9ue1xyXG5cdFx0Zm9udC1zaXplOiAxMy41cHg7XHJcblx0fVxyXG5cdFxyXG5cdC5saW5lOm50aC1jaGlsZCgxKXtcclxuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjUsIDExOCwgMjEwLCAuNik7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xyXG5cclxuXHR9XHJcblx0LmxpbmU6bnRoLWNoaWxkKDIpe1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcblx0fVxyXG5cdC5saW5lOm50aC1jaGlsZCgzKXtcclxuXHRcdGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGJsYWNrO1xyXG5cdH1cclxuXHJcblx0LmxpbmU6bnRoLWNoaWxkKDQpe1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcblx0fVxyXG5cclxuXHQubGluZTpudGgtY2hpbGQoNSl7XHJcblx0XHRib3JkZXItcmlnaHQ6IDBweCBzb2xpZCBibGFjaztcclxuXHR9XHJcblxyXG5cdC8qIGNhamEgZGUgdGl0dWxvICovXHJcblx0LmJveF9yZXN1bHRfdGl0bGV7XHJcblx0XHRib3JkZXItYm90dG9tOiAwcHggc29saWQgYmxhY2s7XHJcblx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XHJcblx0fVxyXG5cdC50b3RhbF90aXRsZXtcclxuXHRcdGJvcmRlci1yaWdodDogMHB4IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsX3RpdGxlOm50aC1jaGlsZCg1KXtcclxuXHRcdGJvcmRlci1yaWdodDogMHB4IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIGJsYWNrO1xyXG5cdH1cclxuXHJcblx0LnRvdGFsX2xpbmV7XHJcblx0XHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcclxuXHR9XHJcblxyXG5cdC50b3RhbF9saW5lOm50aC1jaGlsZCg1KXtcclxuXHRcdGJvcmRlci1yaWdodDogMHB4IHNvbGlkO1xyXG5cdH1cclxuXHJcblx0LyogbnVtYmVyIHJlc3VsdCAqL1xyXG5cdC50b3RhbF9saW5le1xyXG5cdGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGJsYWNrO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuXHR9XHJcblx0LnRvdGFsX2xpbmU6bnRoLWNoaWxkKDUpe1xyXG5cdGJvcmRlci1yaWdodDogMHB4IHNvbGlkIGJsYWNrO1xyXG5cdGJvcmRlci1ib3R0b206IDBweCBzb2xpZCBibGFjaztcclxuXHR9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpe1xyXG5cdC5lbGVjdHJvX2JveHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0aGVpZ2h0OmF1dG87IFxyXG5cdH1cclxuXHJcblx0LmNvbnRlbnRfYm94e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LmltZ19zaXple1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTQwcHg7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyX2ltZ3tcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRib3JkZXItcmlnaHQ6IDBweCBzb2xpZCBibGFjaztcclxuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuXHRcdHBhZGRpbmc6IDVweDtcclxuXHR9XHJcblx0LmxpbmU6bnRoLWNoaWxkKDEpe1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgyNSwgMTE4LCAyMTAsIC42KTtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcblx0fVxyXG5cdC5lbGVjdHJvX3RpdGxle1xyXG5cdGZvbnQtZmFtaWx5OiBHb3JkaXRhLUJvbGQ7XHJcblx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdH1cclxuXHJcblx0Lmg2e1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MnB4KSB7XHJcblx0LnRvdGFsX2xpbmU6bnRoLWNoaWxkKDEpe1xyXG5cdFx0aGVpZ2h0OiA0MnB4O1xyXG5cdH1cdFxyXG59Il19 */"] });


/***/ }),

/***/ "UYHe":
/*!**************************************************************!*\
  !*** ./src/app/component/formulario/formulario.component.ts ***!
  \**************************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FormularioComponent_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormularioComponent_label_4_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeListenerRegister($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.inputregistrar);
} }
function FormularioComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imgprevResgistro, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FormularioComponent_label_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormularioComponent_label_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.changeListener($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormularioComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.tomatuImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FormularioComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormularioComponent_div_50_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.guardar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormularioComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormularioComponent_div_51_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.enviarEditado($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "form-control is-invalid": a0, "form-control  mt-1 mb-2": true }; };
const _c1 = function (a0) { return { "d-block mb-0 text-danger text_info": a0, "d-none": true }; };
let inventarioInfo;
const inventario = [];
class FormularioComponent {
    constructor() {
        //Ouput: funcion que se usa para sacar o exportar una variable tipo <any> y objetos 
        this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inventarioInfoNew = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.vistaform = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enviarImgprevio = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inventarioInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre_del_equipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            consumo_energetico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pesoKg: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            anchoCm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            largoCm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            alturaCm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            imgprev: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
        });
        this.inputregistrar = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.valoresIniciales = {
            nombre_del_equipo: '',
            descripcion: '',
            consumo_energetico: 0,
            pesoKg: 0,
            anchoCm: 0,
            largoCm: 0,
            alturaCm: 0,
            imgprev: ''
        };
        this.name = '';
        this.imgprev = 'https://sam1dc.github.io/sam1dc.github.io-/assets/img/box.png';
        this.imgprevResgistro = 'https://sam1dc.github.io/sam1dc.github.io-/assets/img/box.png';
        this.inventario = [];
    }
    ngOnInit() {
    }
    //subir una imagen
    changeListener($event) {
        return this.readThis($event.target);
    }
    readThis(inputValue) {
        var file = inputValue.files[0];
        if (!file.type.match('image.*')) {
            alert("NO ES UNA IMAGEN");
            return;
        }
        var myReader = new FileReader();
        var fileType = inputValue.parentElement.id;
        myReader.onloadend = (e) => {
            this.tomatuImg = myReader.result;
            this.imgprev = myReader.result;
            this.enviarImgprevio.emit(this.imgprev);
            this.inventarioInfo.value.imgprev = this.imgprev;
            // this.inventarioInfo.controls.imgprev.patchValue(this.imgprev)
            // console.log("myreader.resutl: ", myReader.result);
        };
        myReader.readAsDataURL(file);
    }
    changeListenerRegister($event) {
        return this.readThisRegister($event.target);
    }
    readThisRegister(inputValue) {
        var file = inputValue.files[0];
        if (!file.type.match('image.*')) {
            alert("NO ES UNA IMAGEN");
            return;
        }
        var myReader = new FileReader();
        var fileType = inputValue.parentElement.id;
        myReader.onloadend = (e) => {
            this.imgprevResgistro = myReader.result;
            // this.inventarioInfo.controls.imgprev.patchValue(this.imgprev)
            // console.log("myreader.resutl: ", myReader.result);
        };
        myReader.readAsDataURL(file);
    }
    //limitar caracteres espaciales
    keyPress(event) {
        const pattern = /[^e-]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            // invalid character, prevent input
            event.preventDefault();
        }
    }
    guardar(e) {
        this.inputregistrar.reset();
        this.imgprev = this.imgprevResgistro;
        if (!this.inventarioInfo.valid) {
            alert("Rellene los campos vacios");
            e.stopPropagation();
            e.preventDefault();
        }
        else {
            // console.log("enviando info: ", this.inventarioInfo);
            this.inventario.push(this.inventarioInfo.value);
            this.inventarioInfo.value.imgprev = this.imgprev;
            //este es el formulario form group enviado al hijo
            this.inventarioInfoNew.emit(this.inventarioInfo);
            // console.log("nombre del equipo: ", this.inventario);
            //inserta un parametro a la variable creada, el arreglo de objetos obtenidos
            this.propagar.emit(this.inventario);
            //Enviar imagen previa;
            this.enviarImgprevio.emit(this.imgprev);
            //recibe el boleano del hermano y lo envia al padre @input y @Ouput
            this.boleanocompa = true;
            this.vistaform.emit(this.boleanocompa);
            this.inventarioInfo.reset(this.valoresIniciales);
            this.imgprev = 'https://sam1dc.github.io/sam1dc.github.io-/assets/img/box.png';
            this.imgprevResgistro = 'https://sam1dc.github.io/sam1dc.github.io-/assets/img/box.png';
            //variable limpiar edit recibida del agregar del navbar
            // this.imgprevResgistro = this.limpiandoImagenEdit;
        }
        // console.log("ebnviando al new: ", this.inventarioInfo.value);
    }
    enviarEditado(e) {
        if (!this.inventarioInfo.valid) {
            alert("Rellene los campos vacios");
            e.stopPropagation();
            e.preventDefault();
        }
        else {
            if (this.imgprev == 'https://sam1dc.github.io/sam1dc.github.io-/assets/img/box.png' || this.inventarioInfo.value.imgprev == '') {
                this.imgprev = this.inventario[this.editarForm].imgprev;
                this.inventarioInfo.value.imgprev = this.inventario[this.editarForm].imgprev;
            }
            this.inventario[this.editarForm].nombre_del_equipo = this.inventarioInfo.value.nombre_del_equipo;
            this.inventario[this.editarForm].descripcion = this.inventarioInfo.value.descripcion;
            this.inventario[this.editarForm].consumo_energetico = this.inventarioInfo.value.consumo_energetico;
            this.inventario[this.editarForm].pesoKg = this.inventarioInfo.value.pesoKg;
            this.inventario[this.editarForm].anchoCm = this.inventarioInfo.value.anchoCm;
            this.inventario[this.editarForm].largoCm = this.inventarioInfo.value.largoCm;
            this.inventario[this.editarForm].alturaCm = this.inventarioInfo.value.alturaCm;
            this.inventario[this.editarForm].imgprev = this.imgprev;
            // this.inventario[this.editarForm].check = this.inventarioInfo.value.check;
            // this.inventarioInfo.reset();
            this.imgprev = 'https://sam1dc.github.io/sam1dc.github.io-/assets/img/box.png';
        }
    }
    //funciones para validar
    get nombre() {
        return this.inventarioInfo.get('nombre_del_equipo');
    }
    get consumo() {
        return this.inventarioInfo.get('consumo_energetico');
    }
    get peso() {
        return this.inventarioInfo.get('pesoKg');
    }
    get ancho() {
        return this.inventarioInfo.get('anchoCm');
    }
    get largo() {
        return this.inventarioInfo.get('largoCm');
    }
    get altura() {
        return this.inventarioInfo.get('alturaCm');
    }
}
FormularioComponent.ɵfac = function FormularioComponent_Factory(t) { return new (t || FormularioComponent)(); };
FormularioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormularioComponent, selectors: [["app-formulario"]], inputs: { boleanocompa: "boleanocompa", editarForm: "editarForm", formularioRecibido: "formularioRecibido", inventarioEdit: "inventarioEdit", indexPosition: "indexPosition", vista_edit: "vista_edit", imagenRecibida: "imagenRecibida", limpiandoImagenEdit: "limpiandoImagenEdit", tomatuImg: "tomatuImg" }, outputs: { propagar: "propagar", inventarioInfoNew: "inventarioInfoNew", vistaform: "vistaform", enviarImgprevio: "enviarImgprevio" }, decls: 52, vars: 43, consts: [[1, "modal-body"], [3, "formGroup"], [1, "d-flex", "flex-wrap"], [1, "box_imgprev"], ["for", "file", "class", "label_file", 4, "ngIf"], ["id", "file", "class", "img_input", "alt", "", 3, "src", 4, "ngIf"], [1, "d-flex", "flex-wrap", "flex-column", "box_form"], [1, "col-sm", "px-0"], ["for", "name", 1, "mb-0", "label_font"], ["formControlName", "nombre_del_equipo", "type", "text", "placeholder", "Nombre del equipo", "id", "name", "required", "", 3, "ngClass"], [3, "ngClass"], [1, "form-group", "col-sm", "px-0", "mb-0"], ["for", "descripcion", 1, "mb-0", "label_font"], ["formControlName", "descripcion", "placeholder", "Descripci\u00F3n", "id", "descripcion", "rows", "3", 1, "form-control", "mt-1", "mb-2", "textarea"], [1, "col-12", "px-0"], ["for", "consumo", 1, "mb-0", "label_font"], ["formControlName", "consumo_energetico", "type", "number", "pattern", "[0-9]*", "min", "0", "placeholder", "Consumo electrico", "id", "consumo", "required", "", 3, "ngClass", "keypress"], [1, "col-6", "pl-0"], ["for", "peso", 1, "mb-0", "label_font"], ["formControlName", "pesoKg", "type", "number", "min", "0", "inputmode", "numeric", "placeholder", "Peso kg", "id", "peso", 3, "ngClass", "keypress"], [1, "col-6", "pr-0"], ["for", "anchura", 1, "mb-0", "label_font"], ["formControlName", "anchoCm", "type", "number", "min", "0", "placeholder", "Anchura cm", "id", "anchura", 3, "ngClass", "keypress"], ["for", "largo", 1, "mb-0", "label_font"], ["formControlName", "largoCm", "type", "number", "min", "0", "placeholder", "largo cm", "id", "largo", 3, "ngClass", "keypress"], ["for", "altura", 1, "mb-0", "label_font"], ["formControlName", "alturaCm", "type", "number", "min", "0", "placeholder", "altura cm", "id", "altura", 3, "ngClass", "keypress"], ["formControlName", "check", "type", "checkbox", 1, "d-none"], ["class", "modal-footer", 4, "ngIf"], ["for", "file", 1, "label_file"], ["type", "file", "multiple", "", 1, "input_file", 3, "formControl", "change"], ["input", ""], ["id", "file", "alt", "", 1, "img_input", 3, "src"], ["formControlName", "imgprev", "type", "file", "multiple", "", 1, "input_file", 3, "change"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn_primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-warning", 3, "click"]], template: function FormularioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormularioComponent_label_4_Template, 3, 1, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormularioComponent_img_5_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormularioComponent_label_6_Template, 3, 0, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormularioComponent_img_7_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre del equipo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Error el campo es obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descripci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Consumo Energetico: (W) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormularioComponent_Template_input_keypress_22_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Error el campo es obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Peso: (Kg)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormularioComponent_Template_input_keypress_28_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Error el campo es obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Anchura: (Cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormularioComponent_Template_input_keypress_34_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Error el campo es obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Largo: (Cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormularioComponent_Template_input_keypress_40_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Error el campo es obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Altura: (Cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function FormularioComponent_Template_input_keypress_46_listener($event) { return ctx.keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Error el campo es obligatorio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, FormularioComponent_div_50_Template, 3, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FormularioComponent_div_51_Template, 3, 0, "div", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inventarioInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vista_edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vista_edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vista_edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vista_edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.nombre.invalid && (ctx.nombre.dirty || ctx.nombre.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.nombre.invalid && (ctx.nombre.dirty || ctx.nombre.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.consumo.invalid && (ctx.consumo.dirty || ctx.consumo.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.consumo.invalid && (ctx.consumo.dirty || ctx.consumo.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.peso.invalid && (ctx.peso.dirty || ctx.peso.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, ctx.peso.invalid && (ctx.peso.dirty || ctx.peso.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.ancho.invalid && (ctx.ancho.dirty || ctx.ancho.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c1, ctx.ancho.invalid && (ctx.ancho.dirty || ctx.ancho.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c0, ctx.largo.invalid && (ctx.largo.dirty || ctx.largo.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c1, ctx.largo.invalid && (ctx.largo.dirty || ctx.largo.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c0, ctx.altura.invalid && (ctx.altura.dirty || ctx.altura.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c1, ctx.altura.invalid && (ctx.altura.dirty || ctx.altura.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vista_edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vista_edit);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".input_file[_ngcontent-%COMP%]{\r\n  height: 120px;\r\n  width: 120px;\r\n  outline: none;\r\n  border-radius: 50%;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.img_input[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 23px;\r\n  height: 120px;\r\n  width: 120px;\r\n  z-index: 1;\r\n  border-radius: 50%;\r\n  object-fit: cover;\r\n}\r\n\r\n.input_file[_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  visibility: hidden;\r\n  height: 120px;\r\n  width: 120px;\r\n}\r\n\r\ninput[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  visibility: hidden;\r\n  height: 120px;\r\n  width: 120px;\r\n}\r\n\r\n.input_file[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-radius: 50%;\r\n  padding: 5px 8px;\r\n  outline: none;\r\n  white-space: nowrap;\r\n  -webkit-user-select: none;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n  font-size: 10pt;\r\n  height: 120px;\r\n  width: 120px;\r\n}\r\n\r\n.input_file[_ngcontent-%COMP%]:hover::before {\r\n  border-color: black;\r\n}\r\n\r\n.input_file[_ngcontent-%COMP%]:active::before {\r\n \r\n\tbackground: none;\r\n}\r\n\r\n.label_file[_ngcontent-%COMP%]{\r\n\tposition: absolute;\r\n  top: 40px;\r\n  left: 23px;\r\n\twidth: 120px;\r\n\theight: 120px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid  rgba(0, 0, 0, 0.5);\r\n\tcursor: pointer;\r\n\tz-index: 2;\r\n}\r\n\r\n.label_file[_ngcontent-%COMP%]:hover{\r\n\ttransition: .5s all ease;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.label_file[_ngcontent-%COMP%]:active{\r\n\ttransition: .5s all ease;\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.box_imgprev[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n}\r\n\r\n.box_form[_ngcontent-%COMP%]{\r\n  width: calc(100% - 150px);\r\n}\r\n\r\n.textarea[_ngcontent-%COMP%]{\r\n  max-height: 79.25px;\r\n}\r\n\r\n@media(max-width: 575px){\r\n  .img_input[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  left:0;\r\n  right:0;\r\n  top: 10px;\r\n  height: 120px;\r\n  width: 120px;\r\n}\r\n.label_file[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  left:0;\r\n  right:0;\r\n  top: 10px;\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n  .box_imgprev[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .box_form[_ngcontent-%COMP%]{\r\n    margin-top: 120px;\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm11bGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7Q0FDQyw4QkFBOEI7Q0FDOUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIscUNBQXFDO0NBQ3JDLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBQ0E7Q0FDQyx3QkFBd0I7Q0FDeEIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLDhCQUE4QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0VBQ0Esa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7QUFDZjtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiZm9ybXVsYXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0X2ZpbGV7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbWdfaW5wdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAyM3B4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uaW5wdXRfZmlsZTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuXHJcblxyXG5pbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcbi5pbnB1dF9maWxlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogNXB4IDhweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLmlucHV0X2ZpbGU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxufVxyXG4uaW5wdXRfZmlsZTphY3RpdmU6OmJlZm9yZSB7XHJcbiAvKiB0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7ICovXHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmxhYmVsX2ZpbGV7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAyM3B4O1xyXG5cdHdpZHRoOiAxMjBweDtcclxuXHRoZWlnaHQ6IDEyMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcbi5sYWJlbF9maWxlOmhvdmVye1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5sYWJlbF9maWxlOmFjdGl2ZXtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYm94X2ltZ3ByZXZ7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uYm94X2Zvcm17XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4KTtcclxufVxyXG4udGV4dGFyZWF7XHJcbiAgbWF4LWhlaWdodDogNzkuMjVweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNTc1cHgpe1xyXG4gIC5pbWdfaW5wdXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgbGVmdDowO1xyXG4gIHJpZ2h0OjA7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcbi5sYWJlbF9maWxle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDowO1xyXG4gIHRvcDogMTBweDtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG4gIC5ib3hfaW1ncHJldntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYm94X2Zvcm17XHJcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/component.module */ "bDjW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__["ComponentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _component_component_module__WEBPACK_IMPORTED_MODULE_2__["ComponentModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "bDjW":
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "ObfR");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "xb3B");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formulario/formulario.component */ "UYHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ComponentModule {
}
ComponentModule.ɵfac = function ComponentModule_Factory(t) { return new (t || ComponentModule)(); };
ComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentModule });
ComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
        _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"]] }); })();


/***/ }),

/***/ "xb3B":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
