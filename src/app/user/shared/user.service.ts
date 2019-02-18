import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private http: HttpClient
  ) { }

  updateCategories(form: any): Observable<any> {
    const url = environment.apiUrl + '/students/saveUser';
    return this.http.post(url, form);
  }

  getCategoriesByMailId(form: any): Observable<any> {
    const url = environment.apiUrl + '/students/getStudentDetails';
    return this.http.post(url, form);
  }
}
