import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html', // Usar archivo HTML externo
  styleUrls: ['./services.component.css'], // Agrega estilos si es necesario
})
export class ServicesComponent implements OnInit {
  servicios: any[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchServicios(); // Llamada al servicio al inicializar el componente
  }

  // Método para obtener los servicios
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
