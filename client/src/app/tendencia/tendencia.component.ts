import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tendencia',
  standalone: true,
  imports: [],
  templateUrl: './tendencia.component.html',
  styleUrl: './tendencia.component.css'
})
export class TendenciaComponent {
  @Input() numero: number=0;
  @Input() nombre: String="";
  @Input() posts: String="";
}