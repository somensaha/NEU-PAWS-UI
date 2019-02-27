import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DeclearationsComponent} from './declearations/declearations.component';
import {FinalinformationComponent} from './finalinformation/finalinformation.component';
import {SingoutComponent} from './singout/singout.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: 'skilldeclearations'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'skilldeclearations', component: DeclearationsComponent}
    ]
  },
  {path: 'information', component: FinalinformationComponent},
  {path: 'signout', component: SingoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
