import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // PERSONAL

  getPersonalCombo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/combo`);
  } 

  validateData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/validar`, data);
  }
  
  getFormData(num_doc: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/formdata/${num_doc}`);
  }

  sendFormData(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/storeform`, data);
  }

  // RECURSOS
  getEntityCombo(id_mac: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/entity/${id_mac}`);
  }

  getDepaCombo(departamento_id: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/provincias/${departamento_id}`);
  }

  getDistrCombo(provincia_id: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/distritos/${provincia_id}`);
  }

  // MODULO ASISTENCIA

  sendAssists(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/store-assists`, data);
  }

}
