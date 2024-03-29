import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  title = 'proyecto';
  format(userName: string): string {
    return `@${userName}`;
  }
}
