import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient,
      private router: Router
  ) { }

  /**
   * API call for registering a student
   * @param form
   */
  studentSignUp(form: any): Observable<any> {
    const url = environment.apiUrl + '/students/saveUser';
    return this.http.post(url, form);
  }

  signInAfterSSO(formData: any): Observable<any> {
    const url = environment.apiUrl + '/students/saveUser?ssoCall=Yes';
    return this.http.post(url, formData);
  }

  logout() {
    localStorage.removeItem('userInfo');
    this.router.navigate(['/']);
  }

  userInfo() {
    const data = localStorage.getItem('userInfo');
    let user = null;
    if (data !== null) {
      user = JSON.parse(atob(data));
    }
    return user;
  }
}
