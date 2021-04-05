import { __decorate } from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
let inventarioInfo;
const inventario = [];
let FormularioComponent = class FormularioComponent {
    constructor() {
        //Ouput: funcion que se usa para sacar o exportar una variable tipo <any> y objetos 
        this.propagar = new EventEmitter();
        this.inventarioInfoNew = new EventEmitter();
        this.vistaform = new EventEmitter();
        this.inventarioInfo = new FormGroup({
            nombre_del_equipo: new FormControl("", [Validators.required]),
            descripcion: new FormControl(''),
            consumo_energetico: new FormControl(0, [Validators.required]),
            pesoKg: new FormControl(0, [Validators.required]),
            anchoCm: new FormControl(0, [Validators.required]),
            largoCm: new FormControl(0, [Validators.required]),
            alturaCm: new FormControl(0, [Validators.required]),
            imgprev: new FormControl(''),
            check: new FormControl(false)
        });
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
        this.imgprev = 'assets/img/box.png';
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
            this.imgprev = myReader.result;
            this.inventarioInfo.value.imgprev = this.imgprev;
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
        if (this.inventarioInfo.value.nombre_del_equipo == '') {
            alert("Debe asignar el nombre del equipo");
        }
        if (!this.inventarioInfo.valid) {
            // e.stopPropagation();
            // e.preventDefault(); 
        }
        else {
            this.inventario.push(this.inventarioInfo.value);
            this.inventarioInfo.value.imgprev = this.imgprev;
            // console.log("nombre del equipo: ", this.inventario);
            //inserta un parametro a la variable creada, el arreglo de objetos obtenidos
            this.propagar.emit(this.inventario);
            //recibe el boleano del hermano y lo envia al padre @input y @Ouput
            this.boleanocompa = true;
            this.vistaform.emit(this.boleanocompa);
            this.inventarioInfo.reset(this.valoresIniciales);
            this.imgprev = 'assets/img/box.png';
        }
        this.inventarioInfo.valid;
        // console.log("ebnviando al new: ", this.inventarioInfo.value);
        //este es el formulario form group enviado al hijo
        this.inventarioInfoNew.emit(this.inventarioInfo.value);
    }
    enviarEditado(e) {
        //esta comunica al html
        this.inventarioInfo.value.nombre_del_equipo = this.editarForm.nombre_del_equipo;
        this.inventario[this.editarForm.position].nombre_del_equipo = this.editarForm.nombre_del_equipo;
        console.log("editar: ", this.editarForm);
        console.log("111111: ", this.inventario[this.editarForm.position].nombre_del_equipo);
        console.log("22222: ", this.inventarioInfo.value);
        if (this.imgprev == 'assets/img/box.png') {
            // code...
        }
        else if (this.inventarioInfo.value.nombre_del_equipo == '') {
            this.inventario[this.editarForm.position].nombre_del_equipo = this.editarForm.nombre_del_equipo;
        }
        else if (this.inventario[this.editarForm.position].consumo_energetico == 0) {
            this.inventario[this.editarForm.position].consumo_energetico = this.inventarioInfo.value.consumo_energetico;
        }
        else if (this.inventario[this.editarForm.position].pesoKg == 0) {
            this.inventario[this.editarForm.position].pesoKg = this.inventarioInfo.value.pesoKg;
        }
        else if (this.inventario[this.editarForm.position].anchoCm == 0) {
            this.inventario[this.editarForm.position].anchoCm = this.inventarioInfo.value.anchoCm;
        }
        else if (this.inventario[this.editarForm.position].alturaCm == 0) {
            this.inventario[this.editarForm.position].alturaCm = this.inventarioInfo.value.alturaCm;
        }
        else if (this.inventario[this.editarForm.position].largoCm == 0) {
            this.inventario[this.editarForm.position].largoCm = this.inventarioInfo.value.largoCm;
        }
        else if (this.inventario[this.editarForm.position].descripcion == '') {
            this.inventario[this.editarForm.position].consumo_energetico = this.inventarioInfo.value.consumo_energetico;
        }
        // 
        // 
        // ;
        // t
        // if (this.imgprev == 'assets/img/box.png') {
        //   this.inventario[this.editarForm.position] = this.inventarioInfo.value;
        //   alert("Eso da lag eso cno razo la gente");
        // }else{
        //   this.inventario[this.editarForm.position] = this.inventarioInfo.value;
        //   this.inventario[this.editarForm.position].imgprev = this.imgprev;
        // console.log("esge viene de alla:", this.editarForm);
        // }
        console.log(this.inventario[this.editarForm.position]);
        // this.inventarioInfo.reset();
        this.imgprev = 'assets/img/box.png';
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
};
__decorate([
    Output()
], FormularioComponent.prototype, "propagar", void 0);
__decorate([
    Output()
], FormularioComponent.prototype, "inventarioInfoNew", void 0);
__decorate([
    Output()
], FormularioComponent.prototype, "vistaform", void 0);
__decorate([
    Input()
], FormularioComponent.prototype, "boleanocompa", void 0);
__decorate([
    Input()
], FormularioComponent.prototype, "editarForm", void 0);
__decorate([
    Input()
], FormularioComponent.prototype, "inventarioEdit", void 0);
__decorate([
    Input()
], FormularioComponent.prototype, "indexPosition", void 0);
FormularioComponent = __decorate([
    Component({
        selector: 'app-formulario',
        templateUrl: './formulario.component.html',
        styleUrls: ['./formulario.component.css']
    })
], FormularioComponent);
export { FormularioComponent };
//# sourceMappingURL=formulario.component.js.map