import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { DeclearationsComponent } from './declearations/declearations.component';
import { FinalinformationComponent } from './finalinformation/finalinformation.component';

const routes: Routes = [
  	{
    	path: '', component: LayoutComponent, children: [
      		{path: '', redirectTo: 'skilldeclearations'},
      		{path: 'dashboard', component: DashboardComponent},
      		{path: 'skilldeclearations', component: DeclearationsComponent}
    	]
  	},
	{path: 'information', component: FinalinformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
