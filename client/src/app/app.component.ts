import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,Pagina1Component,Pagina2Component],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  title = 'proyecto';
  format(userName: string): string {
    return `@${userName}`;
  }
}
