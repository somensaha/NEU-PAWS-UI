import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../../shared/userInfo.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-finalinformation',
  templateUrl: './finalinformation.component.html',
  styleUrls: ['./finalinformation.component.css']
})
export class FinalinformationComponent implements OnInit {

  userDetails: UserInfoModel;

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.userDetails = this.authService.userInfo();
    window.scrollTo(0, 0);
  }

}
