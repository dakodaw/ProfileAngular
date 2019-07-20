import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetTestInstructionsComponent } from './budget-test-instructions/budget-test-instructions.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
  { path: '', redirectTo: '/Profile', pathMatch: 'full'},
  { path: 'BudgetTest', component: BudgetTestInstructionsComponent},
  { path: 'Inventory', component: InventoryComponent},
  { path: 'Profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
