import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipment } from '../models/equipment.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllEquipments(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Equipment>> {
    return this.httpClient.get<Array<Equipment>>(
      `${STORE_BASE_URL}/Equipments${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `${STORE_BASE_URL}/Equipments/categories`
    );
  }
}
