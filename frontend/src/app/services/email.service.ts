import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(public http: HttpClient) {}

  sendMessage(body: any): Observable<any> {
    var url = 'http://${localhost}:${3000}/contact';
    return this.http.post(url, body);
  }
}
