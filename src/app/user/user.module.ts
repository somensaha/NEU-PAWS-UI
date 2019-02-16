import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';
import {UserService} from './shared/user.service';
import { DeclearationsComponent } from './declearations/declearations.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FerpaComponent } from './declearations/ferpa/ferpa.component';
import { GdprComponent } from './declearations/gdpr/gdpr.component';
import { PrivacyComponent } from './declearations/privacy/privacy.component';
import { OptinComponent } from './declearations/optin/optin.component';

@NgModule({
  declarations: [DashboardComponent, LayoutComponent, DeclearationsComponent, HeaderComponent, FooterComponent, FerpaComponent, GdprComponent, PrivacyComponent, OptinComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule, AlertModule.forRoot(),
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
