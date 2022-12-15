import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    template: `
        <!-- <h1> Hola mundo </h1> -->
        <h1> {{ titulo }} </h1> <!--Se usan las dobles llaves para ejecutar código de java -->
        <h2> La base es: <strong>{{ base }} </strong></h2>
        <button (click)="acumular(base)"> + {{ base }}</button><!--Se definen las funciones con parentesis-->
        <span> {{ numero }} </span>
        <button (click)="acumular(-base); "> - {{ base }}</button><!--Solo se usa para código sencillo, para que sea facil de leer-->
        <!--Pafa funciones complejas se usa el app.component.ts-->
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    acumular(valor: number) {
      this.numero += valor;
    }
}