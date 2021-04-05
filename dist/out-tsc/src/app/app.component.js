import { __decorate } from "tslib";
import { Component } from '@angular/core';
// import { trigger, style, transition, animate, state } from '@angular/animations';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Domestic-Inventory';
        this.resultencontrado = [];
        this.inventario = [];
        this.result = [];
        this.resultNo = [];
        this.resultSelect = [];
        this.vista = true;
        this.titleEdit = true;
        this.resultBusqueda = 0;
        this.formEdit = {
            nombre_del_equipo: '',
            descripcion: '',
            consumo_energetico: 0,
            pesoKg: 0,
            anchoCm: 0,
            largoCm: 0,
            alturaCm: 0,
            imgprev: '',
            check: 0,
            activar_btn: true,
            position: 0
        };
        this.sumadomestico = 0;
        this.sumapeso = 0;
        this.sumaancho = 0;
        this.sumalargo = 0;
        this.sumaalto = 0;
    }
    formulariogroup(e) {
        this.formularioControl = e;
    }
    //recibe del formulario un arreglo
    // mensaje = parametro hijo recibido
    boleano(boleano) {
        console.log("no lo uso", boleano);
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
        console.log("main", this.inventario);
        ;
    }
    vistaform(vistaform) {
        this.vista = vistaform;
    }
    checkbusqueda(i, event) {
        this.inventario[i].check = event;
        console.log(this.inventario);
    }
    eliminar(index) {
        this.inventario.splice(index, 1);
        console.log("elemento eliminado: ", this.inventario);
        if (this.result.length > 0) {
            this.result.splice(index, 1);
        }
    }
    editar(index) {
        this.formEdit = {
            nombre_del_equipo: this.inventario[index].nombre_del_equipo,
            descripcion: this.inventario[index].descripcion,
            consumo_energetico: this.inventario[index].consumo_energetico,
            pesoKg: this.inventario[index].pesoKg,
            anchoCm: this.inventario[index].anchoCm,
            largoCm: this.inventario[index].largoCm,
            alturaCm: this.inventario[index].alturaCm,
            imgprev: this.inventario[index].imgprev,
            check: this.inventario[index].check,
            activar_btn: true,
            position: index
        };
        console.log(this.formEdit);
        this.formularioControl = this.formEdit;
        //este esta conectado con el formulario
        this.formularioControl.nombre_del_equipo = "pera";
        console.log("formulariocnotorl: ", this.formularioControl);
        this.titleEdit = false;
    }
    busquedaSelect() {
        var resultcheck = this.inventario.filter(checkiando => checkiando.check == true);
        //limpiar el res
        this.resultSelect = [];
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
        console.log("resultado: ", resultcheck);
        this.result = resultcheck;
        // vista para ver la busqueda
        this.vista = false;
        for (var i = 0; i < this.inventario.length; i++) {
            this.inventario[i].check = false;
        }
        this.resultBusqueda = this.resultSelect.length;
    }
    limpiandoBusqueNav(limpiar) {
        this.resultBusqueda = limpiar;
    }
    volver() {
        this.vista = true;
        this.resultBusqueda = 0;
    }
    sendEditrecibido(vistEditar) {
        this.titleEdit = vistEditar;
    }
    //resultado del consumo_energetico
    resultadoConsumo(consumo) {
        this.sumadomestico = consumo;
        console.log("recido del nav: ", consumo);
    }
    resultadoPeso(peso) {
        this.sumapeso = peso;
        console.log("recido del nav: ", peso);
    }
    resultadoAncho(ancho) {
        this.sumaancho = ancho;
        console.log("recido del nav: ", ancho);
    }
    resultadoLargo(largo) {
        this.sumalargo = largo;
        console.log("recido del nav: ", largo);
    }
    resultadoAlto(alto) {
        this.sumaalto = alto;
        console.log("recido del nav: ", alto);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
        // animations: [ 
        //   trigger('enterState', [
        //     state('void', style({
        //       transform: 'translateY(-100px)',
        //       opacity: 0
        //     })),
        //     transition(':enter', [
        //       animate(300,style({
        //         transform: 'translateY(0px)',
        //         opacity: 1
        //     }))
        //   ])
        // ])
        // ]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map