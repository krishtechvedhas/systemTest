import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  baseUrl = 'api'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }
  saveUser(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, data);
  }
  deleteUser(id:number) : Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
  updateUser(data, id:number) : Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, data);
  }
  getUserById(id: number) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${id}`);
  }
}
