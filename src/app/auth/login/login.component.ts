import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {AlertModel} from '../../shared/alert.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loader: boolean;
  alert: AlertModel;
  title: string;

  constructor() {
    this.loader = true;
  }

  ngOnInit() {
    this.title = environment.title;
    this.loader = false;

  }

}
