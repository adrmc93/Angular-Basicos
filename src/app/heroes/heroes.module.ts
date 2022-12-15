import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
@NgModule ({//Decorador
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [//Cosas que quiero hace publicas, es decir visibles fuera
        ListadoComponent
    ],
    imports: [//Modulos que requiero
        CommonModule//Tiene directivas propias de angular como el #ngFor y ngIf
    ]
})
export class HeroesModule{}