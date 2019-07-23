import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetTestInstructionsComponent } from './budget-test-instructions/budget-test-instructions.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { WguMobileComponent } from './wgu-mobile/wgu-mobile.component';
import { AppointmentSchedulerComponent } from './appointment-scheduler/appointment-scheduler.component'


const routes: Routes = [
  { path: '', redirectTo: '/Profile', pathMatch: 'full'},
  { path: 'BudgetTest', component: BudgetTestInstructionsComponent},
  { path: 'Inventory', component: InventoryComponent},
  { path: 'Profile', component: ProfileComponent},
  { path: 'Mobile', component: WguMobileComponent},
  { path: 'Appointment-Scheduler', component: AppointmentSchedulerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
