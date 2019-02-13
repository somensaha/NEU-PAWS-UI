import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {ToastrService} from 'ngx-toastr';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertModel} from '../../shared/alert.model';
import { UserInfoModel } from 'src/app/shared/userInfo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  allAgreement: boolean;
  modalRef: BsModalRef;
  alert: AlertModel;
  optcatdetails: any;
  userDetails: UserInfoModel;
  loader: boolean;
  gdprDisplay: boolean;
  privacyDisplay: boolean;

  constructor(
      private fb: FormBuilder,
      private userService: UserService,
      private toastr: ToastrService,
      private modalService: BsModalService,
  ) {
    this.loader = true;
  }

  ngOnInit() {
    this.allAgreement = false;
    this.userDetails = {emailId: 'michelsen.a@husky.neu.edu', givenName: 'Anna', surname: 'Michelsen', nuId: '001692903'};
    this.createForm();
  }

  /**
   * Create Reactive Form
   */
  createForm() {
    this.form = this.fb.group({
      studentdetails: new FormGroup({
        nuId: new FormControl(this.userDetails.nuId, [Validators.required]),
        emailId: new FormControl(this.userDetails.emailId, [Validators.required]),
        givenName: new FormControl(this.userDetails.givenName, [Validators.required]),
        surname: new FormControl(this.userDetails.surname, [Validators.required]),
      }),
      optcatdetails: new FormGroup({
        ferpa: new FormControl(false, [Validators.required]),
        privacy: new FormControl(false, [Validators.required]),
        gdpr: new FormControl(false, [Validators.required]),
        gni: new FormControl(false, [Validators.required]),
        anb: new FormControl(false, [Validators.required]),
        grd: new FormControl(false, [Validators.required]),
        doc: new FormControl(false, [Validators.required]),
        shl: new FormControl(false, [Validators.required]),
        adv: new FormControl(false, [Validators.required]),
        hsn: new FormControl(false, [Validators.required])
      })
    });
    this.getCategoriesByMailId();
  }

  /**
   * Fetch user details
   */
  getCategoriesByMailId() {
    console.log('getCategoriesByMailId');
    const userfetch = {
      mailId: this.userDetails.emailId,
      type: 'studentCatDetails'
    };
    this.userService.getCategoriesByMailId(userfetch).subscribe(
      (res: any) => {
        if (res.status === 200) {
          const optCat = this.form.get('optcatdetails') as FormGroup;
          optCat.controls['gni'].setValue(res.respData.gni);
          optCat.controls['anb'].setValue(res.respData.anb);
          optCat.controls['grd'].setValue(res.respData.grd);
          optCat.controls['doc'].setValue(res.respData.doc);
          optCat.controls['shl'].setValue(res.respData.shl);
          optCat.controls['adv'].setValue(res.respData.adv);
          optCat.controls['hsn'].setValue(res.respData.hsn);
          optCat.controls['ferpa'].setValue(res.respData.ferpa);
          optCat.controls['privacy'].setValue(res.respData.privacy);
          optCat.controls['gdpr'].setValue(res.respData.gdpr);
          // this.form.updateValueAndValidity();
        }
        this.optinSectionDisplay();
      }, (err: any) => {

      }, () => {
          this.optinSectionDisplay();

      });
  }

  /**
   * Change behavior of categories depend on agreement checkboxes
   */
  optinSectionDisplay() {
    this.displaySelector();
    const optCat = this.form.get('optcatdetails') as FormGroup;
    if (optCat.controls['ferpa'].value === true
        && optCat.controls['privacy'].value === true
        && optCat.controls['gdpr'].value === true) {
      this.allAgreement = true;
      optCat.controls['anb'].enable();
      optCat.controls['grd'].enable();
      optCat.controls['doc'].enable();
      optCat.controls['shl'].enable();
      optCat.controls['adv'].enable();
      optCat.controls['hsn'].enable();
      optCat.controls['gni'].enable();
    } else {
      optCat.controls['anb'].setValue(false);
      optCat.controls['grd'].setValue(false);
      optCat.controls['doc'].setValue(false);
      optCat.controls['shl'].setValue(false);
      optCat.controls['adv'].setValue(false);
      optCat.controls['hsn'].setValue(false);
      optCat.controls['gni'].setValue(false);
      optCat.controls['anb'].disable();
      optCat.controls['grd'].disable();
      optCat.controls['doc'].disable();
      optCat.controls['shl'].disable();
      optCat.controls['adv'].disable();
      optCat.controls['hsn'].disable();
      optCat.controls['gni'].disable();
      this.allAgreement = false;
    }
    this.loader = false;
    // console.log('allAgreement', this.allAgreement);
  }

  /**
   * Save user configuration data
   */
  ngSubmit() {
    this.loader = true;
    console.log(this.form.value);
    if (this.form.valid) {
      this.userService.updateCategories(this.form.value).subscribe(
        (res: any) => {
          if (res.status === 200) {
            setTimeout(() => {
              this.toastr.success('Saved', 'Configuration saved successfully');
            });
          } else {
            setTimeout(() => {
              this.toastr.error('Failed', 'Configuration not saved');
            });
          }
          this.loader = false;

        }, (err: any) => {
          setTimeout(() => {
            this.toastr.error('Failed', 'Configuration not saved');
          });
          this.loader = false;
        });
    }
  }

  /**
   * open modal function
   * @param template
   */
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  displaySelector() {
    console.log(1222);
    const optCat = this.form.get('optcatdetails') as FormGroup;
    if (optCat.controls['ferpa'].value) {
      this.gdprDisplay = true;
    } else {
      this.gdprDisplay = false;
      optCat.controls['gdpr'].setValue(false);
    }

    if (optCat.controls['gdpr'].value) {
      this.privacyDisplay = true;
    } else {
      this.privacyDisplay = false;
      optCat.controls['privacy'].setValue(false);
    }
  }
}
