
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { TendenciaComponent } from '../tendencia/tendencia.component';
import { TwitterFollowCardComponent } from '../twitter-follow-card/twitter-follow-card.component';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavComponent,PerfilComponent,TendenciaComponent,TwitterFollowCardComponent],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {

  title = 'proyecto';
  format(userName: string): string {
    return `@${userName}`;
  }
}
