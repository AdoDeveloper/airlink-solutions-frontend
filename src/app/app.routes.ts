// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta inicial
  { path: 'services', component: ServicesComponent }, // Ruta para servicios
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Ruta 404
];
