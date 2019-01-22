import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient
  ) { }

  /**
   * API call for registering a student
   * @param form
   */
  studentSignUp(form: any): Observable<any> {
    const url = environment.apiUrl + '/students/saveUser';
    return this.http.post(url, form);
  }
}
