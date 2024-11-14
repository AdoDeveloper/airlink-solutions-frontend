import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/core';
import { environment } from '../../environments/environment'; // Importar el entorno actual

const SERVICIOS_KEY = makeStateKey<any[]>('servicios');

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = `${environment.apiUrl}/servicios`; // Usar la URL base del entorno

  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getServicios(): Observable<any[]> {
    if (this.transferState.hasKey(SERVICIOS_KEY)) {
      // Retrieve cached services if available
      const servicios = this.transferState.get<any[]>(SERVICIOS_KEY, []);
      return of(servicios);
    }

    if (isPlatformServer(this.platformId)) {
      // During SSR, fetch data and cache it in TransferState
      return this.http.get<any[]>(this.apiUrl).pipe(
        timeout(10000),
        tap((servicios) => {
          this.transferState.set(SERVICIOS_KEY, servicios);
        }),
        catchError((error) => {
          console.error('Error fetching services during SSR:', error);
          return of([]); // Return empty array on SSR error
        })
      );
    }

    // For the client, make a regular HTTP call
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching services:', error);
        return throwError(() => new Error('Error fetching services'));
      })
    );
  }
}
