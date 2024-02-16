import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  @Input() nombre: string = '';
  @Input() nick: string = '';
  @Input() descripcion: string = '';
  @Input() ubicacion: string = '';
  @Input() enlace: string = '';
  @Input() fechaNacimiento: string = '';
  @Input() fechaUnion: string = '';
  @Input() siguiendo: number = 0;
  @Input() seguidores: number = 0;
  @Input() imagenGrande: string = '';
  @Input() imagenRedonda: string = '';
}
