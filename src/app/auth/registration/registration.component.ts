import { Component, OnInit } from '@angular/core';
import {AlertModel} from '../../shared/alert.model';
import {environment} from '../../../environments/environment';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  loader: boolean;
  alert: AlertModel = {type: null, prefix: null, message: null};
  title: string;

  constructor(
      private authService: AuthService,
      private toastr: ToastrService
  ) {
    this.loader = true;
  }

  ngOnInit() {
    this.title = environment.title;
    this.loader = false;
  }

  confirmPassword(form: NgForm) {
    if (form.value.password !== form.value.copassword) {
      form.controls['copassword'].setErrors({'incorrect': true});
    } else {
      form.controls['copassword'].setErrors({'incorrect': false});
    }
    form.controls['copassword'].updateValueAndValidity();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formFormat = {
        nuId: form.value.nuID,
        emailId: form.value.email,
        studentName: form.value.fullName,
        password: form.value.password,
        farpaDeclaration: true
      };
      this.loader = true;
      this.authService.studentSignUp(formFormat).subscribe(
          (res: any) => {
            if (res.status === 200) {
              this.alert.type = 'success';
              this.alert.prefix = 'Well Done';
              this.alert.message = res.responseMessage.toUpperCase();
              setTimeout(() => {
                this.toastr.success('You have registered successful. Please verify link sent to your e-mail id.', 'Registration successful');
              });
            } else {
              this.alert.type = 'danger';
              this.alert.prefix = 'Oh Snap';
              this.alert.message = res.responseMessage.toUpperCase();
              setTimeout(() => {
                this.toastr.error(res.responseMessage, 'Registration Failed');
              });
            }
            this.loader = false;
          }, (err: any) => {
            this.alert.type = 'danger';
            this.alert.prefix = 'Oh Snap';
            this.alert.message = err.error.message;
            setTimeout(() => {
              this.toastr.error(err.error.message, 'Registration Failed');
            });
            this.loader = false;
          }, () => {
            this.loader = false;
          }
      );
    } else {
      console.log('registration form', form);
      const objKey = Object.keys(form.controls);
      objKey.forEach(item => {
        form.controls[item].markAsTouched();
        form.controls[item].updateValueAndValidity();
      });
    }
  }
}
