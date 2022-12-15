import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',//Se usa app para indicar personalisado, usualmente se usa el mismo nombre que el componente sin la palabra component
    templateUrl: 'heroe.component.html' //Se usa templateUrl porque lo cargo de otro archivo
})
export class HeroeComponent{
    nombre: string = 'IronMan';
    edad  : number = 45;
    obtenerNombre(): string {
        let nombre = '';
        return `${this.nombre} - ${this.edad}`;//Usamos un template literal para construir un strig dentro de los dobles bar tiks
        //return this.nombre + ' - ' + this.edad;
    }
    //Uso de get y set
    get nombreCapitalizado(): string {//Se usa para simular una propiedad en el inteligense
        return this.nombre.toUpperCase();
    }
    //Type script completa el punto y coma en algunas ocasiones y por eso no marca error
    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }
    cambiarEdad(): void {
        this.edad = 25;
    }
}