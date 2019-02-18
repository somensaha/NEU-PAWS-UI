import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/shared/userInfo.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userDetails: UserInfoModel;
  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
  	this.userDetails = this.authService.userInfo();
  }

  signOut() {

  }
}
