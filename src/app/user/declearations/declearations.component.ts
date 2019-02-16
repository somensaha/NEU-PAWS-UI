import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import { UserInfoModel } from 'src/app/shared/userInfo.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertModel} from '../../shared/alert.model';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-declearations',
  templateUrl: './declearations.component.html',
  styleUrls: ['./declearations.component.css']
})
export class DeclearationsComponent implements OnInit {

  form: FormGroup;
  showFerpa: boolean;
  showGdpr: boolean;
  showPrivacy: boolean;
  showOptin: boolean;
  checkFerpa: boolean;
  checkGdpr: boolean;
  checkPrivacy: boolean;
  checkOptin: boolean;
  checkAdv: boolean;
  checkDoc: boolean;
  checkAnb: boolean;
  checkShl: boolean;
  checkGrd: boolean;
  checkHsn: boolean;
  constructor(
      private fb: FormBuilder,
      private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.showFerpa = true;
    this.showGdpr = false;
    this.showPrivacy = false;
    this.showOptin = false;
    this.checkFerpa = true;
  }



}
