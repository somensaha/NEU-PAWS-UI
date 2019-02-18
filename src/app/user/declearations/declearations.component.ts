import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../shared/user.service';
import { UserInfoModel } from 'src/app/shared/userInfo.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AlertModel } from '../../shared/alert.model';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector:    'app-declearations',
    templateUrl: './declearations.component.html',
    styleUrls:   ['./declearations.component.css']
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
    checkAdv: boolean;
    checkDoc: boolean;
    checkAnb: boolean;
    checkShl: boolean;
    checkGrd: boolean;
    checkHsn: boolean;
    userDetails: UserInfoModel;
    userToken: string;

  constructor(
      private fb: FormBuilder,
      private userService: UserService,
      private router: Router,
      private authService: AuthService,
      private route: ActivatedRoute
  ) {
      this.route.queryParams.subscribe(params => {
          this.userToken = params['token'];
          // this.userToken = 'shibap551u3y4l7';
          // console.log(this.userToken);
      });
  }

  ngOnInit() {
      this.showFerpa = true;
      this.showGdpr = false;
      this.showPrivacy = false;
      this.showOptin = false;
      this.checkFerpa =false;
      this.checkGdpr=false;
      this.checkPrivacy=false;
      this.checkAdv=false;
      this.checkDoc=false;
      this.checkAnb=false;
      this.checkShl=false;
      this.checkGrd=false;
      this.checkHsn=false;

      this.createForm();
  }

  // getStudentDetails() {
  //   this.userService.getStudentDetailsByToken(this.userToken).subscribe(
  //       (res: any) => {
  //
  //       }, (err: any) => {
  //
  //       }, () => {
  //
  //       }
  //   )
  // }

  /**
   * Create Reactive Form
   */
  createForm() {
    this.form = this.fb.group({
      studentdetails: new FormGroup({
        nuId: new FormControl('', [Validators.required]),
        emailId: new FormControl('', [Validators.required]),
        givenName: new FormControl('', [Validators.required]),
        surname: new FormControl('', [Validators.required]),
      }),
      optcatdetails: new FormGroup({
        ferpa: new FormControl(this.checkFerpa, [Validators.required]),
        privacy: new FormControl(this.checkPrivacy, [Validators.required]),
        gdpr: new FormControl(this.checkGdpr, [Validators.required]),
        anb: new FormControl(this.checkAnb, [Validators.required]),
        grd: new FormControl(this.checkGrd, [Validators.required]),
        doc: new FormControl(this.checkDoc, [Validators.required]),
        shl: new FormControl(this.checkShl, [Validators.required]),
        adv: new FormControl(this.checkAdv, [Validators.required]),
        hsn: new FormControl(this.checkHsn, [Validators.required])
      })
    });
    this.getCategoriesByMailId();
  }

  /**
   * Fetch user details
   */
  getCategoriesByMailId() {
    this.userService.getStudentDetailsByToken(this.userToken).subscribe(
      (res: any) => {
        if (res.status === 200) {
              this.checkFerpa=res.respData.ferpa;
              this.checkGdpr=res.respData.gdpr;
              this.checkPrivacy=res.respData.privacy;
              this.checkAdv =res.respData.adv;
              this.checkDoc =res.respData.doc;
              this.checkAnb =res.respData.anb;
              this.checkShl =res.respData.shl;
              this.checkGrd =res.respData.grd;
              this.checkHsn =res.respData.hsn;

              const userDet = this.form.get('studentdetails') as FormGroup;
                userDet.controls['nuId'].setValue(res.respData.nuId);
                userDet.controls['emailId'].setValue(res.respData.email);
                userDet.controls['givenName'].setValue(res.respData.givenName);
                userDet.controls['surname'].setValue(res.respData.surName);

                this.userDetails = {emailId: res.respData.email, givenName: res.respData.givenName, surname: res.respData.surName, nuId: res.respData.nuId};
                localStorage.setItem('userInfo', btoa(JSON.stringify(this.userDetails)));


            const optCat = this.form.get('optcatdetails') as FormGroup;
              optCat.controls['doc'].setValue(this.checkDoc);
              optCat.controls['shl'].setValue(this.checkShl);
              optCat.controls['anb'].setValue(this.checkAnb);
              optCat.controls['grd'].setValue(this.checkGrd);
              optCat.controls['adv'].setValue(this.checkAdv);
              optCat.controls['hsn'].setValue(this.checkHsn);
              optCat.controls['ferpa'].setValue(this.checkFerpa);
              optCat.controls['privacy'].setValue(this.checkPrivacy);
              optCat.controls['gdpr'].setValue(this.checkGdpr);
        }
       
      }, (err: any) => {

      }, () => {
          console.log('form', this.form.value);

      });
  }

  receiveMoveGdpr($event) {
    this.showFerpa = false;
    this.showGdpr = true;
    this.checkFerpa =$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['ferpa'].setValue(this.checkFerpa);
  }

  receiveMovePrivacy($event) {
    this.showGdpr = false;
    this.showPrivacy = true;
    this.checkGdpr =$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['gdpr'].setValue(this.checkGdpr);
  }

  receiveMoveOptin($event) {
    this.showPrivacy = false;
    this.showOptin = true;
    this.checkPrivacy=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['privacy'].setValue(this.checkPrivacy);
  }

  changeAdv($event) {
    this.checkAdv=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['adv'].setValue(this.checkAdv);
  }

  changeAnb($event) {
    this.checkAnb=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['anb'].setValue(this.checkAnb);
  }

  changeGrd($event) {
    this.checkGrd=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['grd'].setValue(this.checkGrd);
  }

  chageDoc($event) {
    this.checkDoc=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['doc'].setValue(this.checkDoc);
  }

  chandeShl($event) {
    this.checkShl=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['shl'].setValue(this.checkShl);
  }

  changeHsn($event) {
    this.checkHsn=$event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['hsn'].setValue(this.checkHsn);
  }

  submitData($event) {
      console.log(this.form.value);
      this.userService.updateCategories(this.form.value).subscribe(
          (res: any) => {
              if (res.status === 200) {
                  // window.location.href = '/user/informationnnnnnnn';
                  this.router.navigate(['/user/information']);
              }

          }, (err: any) => {

          });
  }



}
