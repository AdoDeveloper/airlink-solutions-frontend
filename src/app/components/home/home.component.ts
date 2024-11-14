import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, TeamComponent],
  templateUrl: './home.component.html', // Referencia al archivo HTML externo
  styles: [``], // Mantén los estilos aquí o en un archivo CSS/SCSS
})
export class HomeComponent {}
