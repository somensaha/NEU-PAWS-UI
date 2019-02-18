import { Component, OnInit } from '@angular/core';
import { UserInfoModel } from 'src/app/shared/userInfo.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userDetails: UserInfoModel;
  constructor() { }

  ngOnInit() {
  	this.userDetails = {emailId: 'michelsen.a@husky.neu.edu', givenName: 'Anna', surname: 'Michelsen', nuId: '001692903'};
  }

  signOut() {

  }
}
