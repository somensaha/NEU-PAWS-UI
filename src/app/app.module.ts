import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap';
import { RegistrationComponent } from './auth/registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthService} from './auth/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  AuthServiceConfig,
  // FacebookLoginProvider,
  GoogleLoginProvider,
  // LinkedinLoginProvider,
  SocialLoginModule
} from 'angular-6-social-login';
import { CallbackComponent } from './auth/callback/callback.component';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        // {
        //   id: FacebookLoginProvider.PROVIDER_ID,
        //   provider: new FacebookLoginProvider("Your-Facebook-app-id")
        // },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('90969175977-l8lc54ravuralfrd4fg1igg50mq5ea79.apps.googleusercontent.com')
        },
        // {
        //   id: LinkedinLoginProvider.PROVIDER_ID,
        //   provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
        // },
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    AppRoutingModule, SocialLoginModule,
    FormsModule, HttpClientModule, ToastrModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
