import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SlideItem {
  type: 'image' | 'video';
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  description: string;
  buttonText?: string;
  label: string;
  state?: string;
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info {
  activeIndex = 0;

  slideList: SlideItem[] = [
    {
      type: 'image',
      imageUrl: '/img/equipoLogro.jpg',
      title: 'Bienvenido a KriVi',
      description: 'Transformamos tu experiencia digital.',
      buttonText: 'Saber más',
      label: 'Inicio'
    },
    {
      type: 'video',
      videoUrl: '',
      title: 'Aprende nuevas habilidades',
      description: 'Cursos modernos y prácticos.',
      buttonText: 'Ver cursos',
      label: 'Cursos'
    },
    {
      type: 'image',
      imageUrl: '',
      title: 'Conéctate con expertos',
      description: 'Obtén mentorías personalizadas.',
      buttonText: 'Contactar',
      label: 'Mentoría'
    }
  ];

  setActive(index: number): void {
    if (index === this.activeIndex) return;

    const prevIndex = this.activeIndex;
    this.slideList[prevIndex].state = 'exitLeft';

    this.activeIndex = index;
    this.slideList[index].state = 'active';

    setTimeout(() => {
      this.slideList[prevIndex].state = '';
    }, 800);
  }

  getSlideTransform(): string {
    return `translateX(-${this.activeIndex * 100}%)`;
  }
}
