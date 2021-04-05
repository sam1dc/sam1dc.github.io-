import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formulario/formulario.component';
let ComponentModule = class ComponentModule {
};
ComponentModule = __decorate([
    NgModule({
        declarations: [
            NavbarComponent,
            FooterComponent,
            FormularioComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ],
        exports: [
            FooterComponent,
            NavbarComponent,
            FormularioComponent
        ]
    })
], ComponentModule);
export { ComponentModule };
//# sourceMappingURL=component.module.js.map