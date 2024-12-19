import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Videojuego } from './models';

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
  hoy = new Date();
  nombreUsuario = 'Josue';
  porcentaje = 0.9;
  pokemon = {
    nombre: 'Pikachu',
    nivel: 99,
  };
  precioPS5 = 9999;

  carrito: string[] = [];
  videojuegos: Videojuego[] = [
    {
      nombre: 'Resident Evil 3',
      lanzamiento: new Date('1999-04-04'),
      soldout: true,
    },
    {
      nombre: 'Age of Empires II',
      lanzamiento: new Date('1998-03-01'),
      soldout: false,
    },
    {
      nombre: 'GTA V',
      lanzamiento: new Date('2013-09-17'),
      soldout: true,
    },
  ];

  constructor() {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false;
    }, 3000);
    // setInterval(() => {
    //   this.hayError = !this.hayError;
    // }, 1000);
  }

  onClick(event: MouseEvent): void {
    console.log('Click!', event);
  }

  agregarAlCarrito(videojuego: Videojuego) {
    if (videojuego.soldout) {
      alert('No hay stock!');
    } else {
      this.carrito.push(videojuego.nombre);
    }
  }
}
