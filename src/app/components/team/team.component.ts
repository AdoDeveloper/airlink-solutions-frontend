import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  nombre: string;
  foto: string;
  github: string;
  descripcion: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  team: TeamMember[] = [
    {
      nombre: 'Juan Pérez',
      foto: 'assets/img/juan.webp',
      github: 'https://github.com/juanperez',
      descripcion: 'Desarrollador Frontend con experiencia en Angular y React.',
    },
    {
      nombre: 'María García',
      foto: 'assets/img/maria.webp',
      github: 'https://github.com/mariagarcia',
      descripcion: 'Ingeniera de Software especializada en Backend con Node.js.',
    },
    {
      nombre: 'Carlos López',
      foto: 'assets/img/carlos.webp',
      github: 'https://github.com/carloslopez',
      descripcion: 'DevOps con experiencia en Kubernetes y AWS.',
    },
    {
      nombre: 'Ana Torres',
      foto: 'assets/img/ana.webp',
      github: 'https://github.com/anatorres',
      descripcion: 'Diseñadora UX/UI enfocada en mejorar la experiencia del usuario.',
    },
  ];
}
