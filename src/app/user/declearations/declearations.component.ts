import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../shared/user.service';
import {UserInfoModel} from 'src/app/shared/userInfo.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';
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
  checkAdv: boolean;
  checkDoc: boolean;
  checkAnb: boolean;
  checkShl: boolean;
  checkGrd: boolean;
  checkHsn: boolean;
  userDetails: UserInfoModel;
  userToken: string;

  respData: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.route.queryParams.subscribe(params => {
      this.userToken = params['token'];
      // this.userToken = 'shibap551u3y4l7';
      if (this.userToken === undefined) {
        setTimeout(() => {
          this.toastr.error('You need to sign in with valid credential to access the portal', 'Not Authenticated', {
            timeOut: 6000,
            progressBar: true,
          });
        });
        this.router.navigate(['/']);
      } else {
        this.userService.getStudentDetailsByToken(this.userToken).subscribe(
          (res: any) => {
            if (res.status === 200) {
              if (res.respData.email === null || res.respData.nuId === null || res.respData.email === '' || res.respData.nuId === '') {
                setTimeout(() => {
                  this.toastr.error('You need to sign in with valid credential to access the portal', 'Not Authenticated', {
                    timeOut: 6000,
                    progressBar: true,
                  });
                });
                // window.open('https://neuidmssotest.neu.edu/idp/profile/Logout', '_blank');
                this.router.navigate(['/user/signout']);
              }
              this.respData = res.respData;
              this.userDetails = {
                emailId: res.respData.email,
                givenName: res.respData.givenName,
                surname: res.respData.surName,
                nuId: res.respData.nuId
              };
              localStorage.setItem('userInfo', btoa(JSON.stringify(this.userDetails)));
              this.showFerpa = false;
              this.showGdpr = false;
              this.showPrivacy = true;
              this.showOptin = false;
              this.checkFerpa = this.respData.ferpa;
              this.checkGdpr = this.respData.gdpr;
              this.checkPrivacy = this.respData.privacy;
              this.checkAdv = this.respData.adv;
              this.checkDoc = this.respData.doc;
              this.checkAnb = this.respData.anb;
              this.checkShl = this.respData.shl;
              this.checkGrd = this.respData.grd;
              this.checkHsn = this.respData.hsn;

              this.createForm();

              if(this.respData.privacy) {
                this.showPrivacy = false;
                this.showOptin = true;
              }
            } else {
              setTimeout(() => {
                this.toastr.error('You need to sign in with valid credential to access the portal', 'Not Authenticated', {
                  timeOut: 6000,
                  progressBar: true,
                });
              });
              this.router.navigate(['/']);
            }


          }, (err: any) => {
            setTimeout(() => {
              this.toastr.error('You need to sign in with valid credential to access the portal', 'Not Authenticated', {
                timeOut: 6000,
                progressBar: true,
              });
            });
            this.router.navigate(['/']);
          }
        );
      }
    });
  }

  ngOnInit() {


  }

  /**
   * Create Reactive Form
   */
  createForm() {
    this.form = this.fb.group({
      studentdetails: new FormGroup({
        nuId: new FormControl(this.respData.nuId, [Validators.required]),
        emailId: new FormControl(this.respData.email, [Validators.required]),
        givenName: new FormControl(this.respData.givenName, [Validators.required]),
        surname: new FormControl(this.respData.surName, [Validators.required]),
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

  }

  receiveMoveGdpr($event) {
    this.showFerpa = false;
    this.showGdpr = true;
    this.checkFerpa = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['ferpa'].setValue(this.checkFerpa);
  }

  receiveMovePrivacy($event) {
    this.showGdpr = false;
    this.showPrivacy = true;
    this.checkGdpr = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['gdpr'].setValue(this.checkGdpr);
  }

  receiveMoveOptin($event) {
    this.showPrivacy = false;
    this.showOptin = true;
    this.checkPrivacy = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['privacy'].setValue(this.checkPrivacy);
  }

  changeAdv($event) {
    this.checkAdv = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['adv'].setValue(this.checkAdv);
  }

  changeAnb($event) {
    this.checkAnb = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['anb'].setValue(this.checkAnb);
  }

  changeGrd($event) {
    this.checkGrd = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['grd'].setValue(this.checkGrd);
  }

  chageDoc($event) {
    this.checkDoc = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['doc'].setValue(this.checkDoc);
  }

  chandeShl($event) {
    this.checkShl = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['shl'].setValue(this.checkShl);
  }

  changeHsn($event) {
    this.checkHsn = $event;
    const optCat = this.form.get('optcatdetails') as FormGroup;
    optCat.controls['hsn'].setValue(this.checkHsn);
  }

  submitData($event) {
    console.log(this.form.value);
    this.userService.updateCategories(this.form.value).subscribe(
      (res: any) => {
        if (res.status === 200) {
          this.router.navigate(['/user/information']);
        }
      }, (err: any) => {

      });
  }


}
