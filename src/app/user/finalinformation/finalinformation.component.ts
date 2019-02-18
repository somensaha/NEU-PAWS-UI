import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../../shared/userInfo.model';

@Component({
  selector: 'app-finalinformation',
  templateUrl: './finalinformation.component.html',
  styleUrls: ['./finalinformation.component.css']
})
export class FinalinformationComponent implements OnInit {

  userDetails: UserInfoModel;

  constructor() { }

  ngOnInit() {
    this.userDetails = {emailId: 'michelsen.a@husky.neu.edu', givenName: 'Anna', surname: 'Michelsen', nuId: '001692903'};
  }

}
