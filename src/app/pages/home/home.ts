import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
[x: string]: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
  image: string;
  title: string;
  description: string;
  button?: string;
  label: string;
  state?: string; // para manejar el estado de la animación
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
activeIndex = 0;

  slides: Slide[] = [
  {
    image: 'img/equipoLogro.jpg',
    title: 'Bienvenido a KriVi',
    description: 'Transformamos tu experiencia digital.',
    button: 'Saber más',
    label: 'Inicio'
  },
  {
    image: 'img/equipoLogro.jpg',
    title: 'Aprende nuevas habilidades',
    description: 'Cursos modernos y prácticos.',
    button: 'Ver cursos',
    label: 'Cursos'
  },
  {
    image: 'img/equipoLogro.jpg',
    title: 'Conéctate con expertos',
    description: 'Obtén mentorías personalizadas.',
    button: 'Contactar',
    label: 'Mentoría'
  }
];


  setActive(index: number) {
  if (index === this.activeIndex) return;

  // Marcar slide actual como "exit-left"
  const prevIndex = this.activeIndex;
  this.slides[prevIndex].state = 'exit-left';

  // Actualizar slide activo
  this.activeIndex = index;
  this.slides[index].state = 'active';

  // Limpiar clase exit-left después de animación
  setTimeout(() => {
    this.slides[prevIndex].state = '';
  }, 800); // tiempo debe coincidir con la transición CSS
}
   getSlideTransform() {
    return `translateX(-${this.activeIndex * 100}%)`;
  }
}