import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/users`;
    return this.http.post(loginUrl, credentials);
  }

  getLogInData(): Observable<any>{
    return this.http.get(`${this.apiUrl}/users`)
  }
}
