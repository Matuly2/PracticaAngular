import { Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component'; // Asegúrate de que la ruta de importación sea correcta
import { Pagina2Component } from './pagina2/pagina2.component'; // Asegúrate de que la ruta de importación sea correcta

export const routes: Routes = [
  { path: '', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
];