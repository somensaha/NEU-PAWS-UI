import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {AlertModel} from '../../shared/alert.model';
import {AuthService} from '../auth.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  loader: boolean;
  title: string;
  alert: AlertModel;

  constructor(
      private router: Router,
      private authService: AuthService,
      private toastr: ToastrService
  ) {
    this.loader = true;
  }

  ngOnInit() {
    this.title = environment.title;
    setTimeout(() => {
      // this.ngSignedInUser();
    }, 5000);
  }

  ngSignedInUser() {
    const userDetails = {
      studentdetails: {
        nuId: '1000',
        emailId: 'abarua2@dccservices.net',
        givenName: 'Usharanibala3',
        surname: 'Usharanibala'
      },
      optcatdetails: {
        gni: false,
        anb: false,
        grd: false,
        doc: false,
        shl: false,
        adv: false,
        hsn: false,
        farpa: false,
        privacy: false
      }
    };

    this.authService.signInAfterSSO(userDetails).subscribe(
        (res: any) => {
          if (res.status === 200) {
            localStorage.setItem('userInfo', btoa(JSON.stringify(userDetails.studentdetails)));
            setTimeout(() => this.toastr.success('Welcome ', 'Login Successful!'));
            this.router.navigate(['user']);
          } else {
            setTimeout(() => this.toastr.error('Error ', 'Login failed!'));
            this.authService.logout();
          }
        }, (err: any) => {
          setTimeout(() => this.toastr.error('Error ', 'Login failed!'));
          this.authService.logout();
        }
    );

  }

}
