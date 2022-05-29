import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SimpleMessagePayload } from '../_model/SimpleMessagePayload';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(
    private http: HttpClient
  ) { }

  getUserMessage(): Observable<SimpleMessagePayload> {
    return this.http.get<SimpleMessagePayload>(environment.restUrl + '/api/test/user', {withCredentials: true})
      .pipe(map(data => new SimpleMessagePayload(data.message)));
  }

  getModMessage(): Observable<SimpleMessagePayload> {
    return this.http.get<SimpleMessagePayload>(environment.restUrl + '/api/test/mod', {withCredentials: true})
      .pipe(map(data => new SimpleMessagePayload(data.message)));
  }

  getAdminMessage(): Observable<SimpleMessagePayload> {
    return this.http.get<SimpleMessagePayload>(environment.restUrl + '/api/test/admin', {withCredentials: true})
      .pipe(map(data => new SimpleMessagePayload(data.message)));
  }
}
