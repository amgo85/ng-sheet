import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sheet } from '../models/sheetsmodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private http: HttpClient) { }

  createReview(name: string, email: string, residence: string, native: string, rating: number, testimony: string): Observable<Sheet>{
    return this.http.post<Sheet>(`${environment.CONNECTION_URL}`, { 
      name, 
      email, 
      residence, 
      native, 
      rating, 
      testimony 
    });
  }

  listSheet() {
    return this.http.get(`${environment.CONNECTION_URL}`);
  }

  deleteReview(id: number){
    return this.http.delete(`${environment.CONNECTION_URL}/${id}`);
  }

  getSheetReviewById(id: number) {
    return this.http.get(`${environment.CONNECTION_URL}/${id}`);
  }

  updateSheetReview(id: number, name: string, email: string, residence: string, native: string, rating: number, testimony: string): Observable<Sheet> {
    return this.http.put<Sheet>(`${environment.CONNECTION_URL}/${id}`, { 
      name, 
      email, 
      residence, 
      native, 
      rating, 
      testimony 
    });
  }

}
