import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { TendenciaComponent } from '../tendencia/tendencia.component';
import { TwitterFollowCardComponent } from '../twitter-follow-card/twitter-follow-card.component';


@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavComponent,PerfilComponent,TendenciaComponent,TwitterFollowCardComponent],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {
  format(userName: string): string {
    return `@${userName}`;
  }
}



