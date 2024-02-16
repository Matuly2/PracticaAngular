import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  links = [
    { texto: 'Inicio', imagen: '../../assets/img/inicio.png', url: '/' },
    { texto: 'Explorar', imagen: '../../assets/img/explorar.png', url: '/pagina2' },
  ];
}
 