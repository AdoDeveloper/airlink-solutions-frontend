import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { TeamComponent } from '../team/team.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  servicios: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchServicios();
  }

  private fetchServicios(): void {
    this.apiService.getServicios().subscribe({
      next: (data) => {
        this.servicios = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los servicios', err);
        this.loading = false;
      },
    });
  }
}
