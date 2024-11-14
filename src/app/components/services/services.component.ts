import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  @Input() servicios: any[] = [];  // Recibir servicios como Input
  @Input() loading: boolean = true; // Recibir el estado de carga

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    if (!this.servicios.length) {
      this.fetchServicios(); // Si no se pasan servicios, hace la solicitud
    }
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
