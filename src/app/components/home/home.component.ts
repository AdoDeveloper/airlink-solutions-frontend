// home.component.ts
import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, TeamComponent],
  templateUrl: './home.component.html',
  styles: [``],
})
export class HomeComponent {}
