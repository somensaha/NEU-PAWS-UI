import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
// import {RegistrationComponent} from './auth/registration/registration.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CallbackComponent} from './auth/callback/callback.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    // {path: 'registration', component: RegistrationComponent},
    {path: 'signin_callback', component: CallbackComponent},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
