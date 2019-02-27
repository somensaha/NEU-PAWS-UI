import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {AlertModel} from '../../shared/alert.model';


@Component({
  selector: 'app-singout',
  templateUrl: './singout.component.html',
  styleUrls: ['./singout.component.css']
})
export class SingoutComponent implements OnInit {
  loader: boolean;
  alert: AlertModel;
  title: string;

  constructor(
  ) {
    this.loader = true;
  }

  ssoLogout() {
    const redirectUrl = environment.signOutURL
    console.log('redirect url', redirectUrl);
    window.location.href = redirectUrl;
  }

  ngOnInit() {
  }

}
