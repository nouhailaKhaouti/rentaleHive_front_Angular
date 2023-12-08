import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { demande, demandeRequest } from '../models/demande.model';
import { ResponseEntity } from '../models/ResponseEntity.model';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = 'http://localhost:8091/api/demandes';

  constructor(private http: HttpClient) { }

  createDemande(demandeRequest: demandeRequest): Observable<any> {
    return this.http.post<ResponseEntity<any>>(this.apiUrl, demandeRequest);
  }
}