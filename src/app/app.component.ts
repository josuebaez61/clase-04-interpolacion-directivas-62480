import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clase-04-interpolacion-directivas-62840';
  hayError = true;
  estudiantes = ['Goku', 'Trunks', 'Gohan'];
  estadoEnvio: 'pendiente' | 'entregado' | 'rechazado' = 'pendiente';
  cargando = false;

  constructor() {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
    }, 3000);

    // setInterval(() => {
    //   this.hayError = !this.hayError;
    // }, 1000);
  }
}
