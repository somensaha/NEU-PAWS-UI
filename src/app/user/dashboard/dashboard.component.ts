import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../shared/user.service';
import {ToastrService} from 'ngx-toastr';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AlertModel} from '../../shared/alert.model';

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

  constructor(
      private fb: FormBuilder,
      private userService: UserService,
      private toastr: ToastrService,
      private modalService: BsModalService,
  ) {
  }

  ngOnInit() {
    this.allAgreement = false;
    this.createForm();
  }

  /**
   * Create Reactive Form
   */
  createForm() {
    this.form = this.fb.group({
      studentdetails: new FormGroup({
        nuId: new FormControl('001692903', [Validators.required]),
        emailId: new FormControl('michelsen.a@husky.neu.edu', [Validators.required]),
        givenName: new FormControl('Anna', [Validators.required]),
        surname: new FormControl('Michelsen', [Validators.required]),
      }),
      optcatdetails: new FormGroup({
        farpa: new FormControl(false, [Validators.required]),
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
    this.optinSectionDisplay();
  }

  /**
   * Change behavior of categories depend on agreement checkboxes
   */
  optinSectionDisplay() {
    const optCat = this.form.get('optcatdetails') as FormGroup;
    if (optCat.controls['farpa'].value === true
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
    // console.log('allAgreement', this.allAgreement);
  }

  /**
   * Save user configuration data
   */
  ngSubmit() {
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

          }, (err: any) => {
            setTimeout(() => {
              this.toastr.error('Failed', 'Configuration not saved');
            });
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
}
