import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.sendresultadosCosmeticos = new EventEmitter();
        this.enviarPeso = new EventEmitter();
        this.enviarAncho = new EventEmitter();
        this.enviarLargo = new EventEmitter();
        this.enviarAlto = new EventEmitter();
        this.sendEdit = new EventEmitter();
        this.limpiarBusqueda = new EventEmitter();
        this.boleano = new EventEmitter();
        this.result = new EventEmitter();
        this.nombre = new FormControl('', [Validators.required]);
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
        console.log(this.nombre.value);
        console.log("invetario recibido: ", this.inventarioRecibido);
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
            console.log("result: ", result);
            //limpiar busqueda
        }
        this.busquedarecibida = result.length;
        this.limpiarBusqueda.emit(this.busquedarecibida);
        console.log("ver el resueltado: ", result);
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
        //no vaya a editar
        console.log(this.noEditar);
        this.noEditar.activar_btn = false;
        this.vistaEdit = true;
        this.sendEdit.emit(this.vistaEdit);
        console.log("limpiando: ", this.limpiandoValue);
        //limipiano al editar y luego ir al agregar
        this.limpiandoValue.nombre = '';
        this.limpiandoValue.descripcion = '';
        this.limpiandoValue.energia = 0;
        this.limpiandoValue.pesokg = 0;
        this.limpiandoValue.ancho = 0;
        this.limpiandoValue.largo = 0;
        this.limpiandoValue.altura = 0;
        this.limpiandoValue.img = '';
        this.limpiandoValue.check = 0;
    }
};
__decorate([
    Input()
], NavbarComponent.prototype, "vistaEdit", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "busquedarecibida", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "noEditar", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "inventarioRecibido", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "limpiandoValue", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "sumaGetdomesctico", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "sumaGetpeso", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "sumaGetancho", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "sumaGetlargo", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "sumaGetalto", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "sendresultadosCosmeticos", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "enviarPeso", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "enviarAncho", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "enviarLargo", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "enviarAlto", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "sendEdit", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "limpiarBusqueda", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "boleano", void 0);
__decorate([
    Output()
], NavbarComponent.prototype, "result", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map