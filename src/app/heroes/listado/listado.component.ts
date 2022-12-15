import { Component/*, OnInit */} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  })
export class ListadoComponent /* implements OnInit */{
  //constructor() {
  //  console.log('constructor');
  //}
  //ngOnInit(): void{//Se ejecuta despues del constructor y se usa para inicializar cosas
  //  console.log('ngOnInit');
  //}
  heroes: string[] = ['SpiderMan','IronMan','Hulk','Thor','Capitán América'];
  heroeBorrado?: string = '';
  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift()||'';
    console.log(this.heroeBorrado);
  }
}
