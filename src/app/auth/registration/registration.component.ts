import { Component, OnInit } from '@angular/core';
import {AlertModel} from '../../shared/alert.model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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
