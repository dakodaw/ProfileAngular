import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetTestInstructionsComponent } from './pages/budget-test-instructions/budget-test-instructions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { WguMobileComponent } from './pages/wgu-mobile/wgu-mobile.component';
import { AppointmentSchedulerComponent } from './pages/appointment-scheduler/appointment-scheduler.component'
import { GithubIntegrationComponent } from './pages/github-integration/github-integration.component';


const routes: Routes = [
  { path: '', redirectTo: '/Profile', pathMatch: 'full'},
  { path: 'BudgetTest', component: BudgetTestInstructionsComponent},
  { path: 'Inventory', component: InventoryComponent},
  { path: 'Profile', component: ProfileComponent, pathMatch: 'full'},
  { path: 'Mobile', component: WguMobileComponent},
  { path: 'Appointment-Scheduler', component: AppointmentSchedulerComponent},
  { path: 'GitHub-Integration/:repoName', component: GithubIntegrationComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
    useHash: false,
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
