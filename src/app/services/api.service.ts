import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { environment } from '../../environments/environment'; // Importar el entorno actual

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}/servicios`; // Usar la URL base del entorno

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // Método para obtener los servicios sin usar el caché
  getServicios(): Observable<any[]> {
    // Si estamos en el servidor (SSR), siempre recuperamos los datos frescos
    if (isPlatformServer(this.platformId)) {
      return this.http.get<any[]>(this.apiUrl).pipe(
        timeout(10000),
        catchError((error) => {
          console.error('Error fetching services during SSR:', error);
          return throwError(() => new Error('Error fetching services'));
        })
      );
    }

    // En el cliente, siempre hace una nueva solicitud HTTP
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching services:', error);
        return throwError(() => new Error('Error fetching services'));
      })
    );
  }
}
