import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { BudgetTestInstructionsComponent } from './pages/budget-test-instructions/budget-test-instructions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { InstructionsComponent } from './pages/inventory/instructions/instructions.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { BudgetInstructionsComponent } from './pages/budget-test-instructions/budget-instructions/budget-instructions.component';
import { WguMobileComponent } from './pages/wgu-mobile/wgu-mobile.component';
import { AppointmentSchedulerComponent } from './pages/appointment-scheduler/appointment-scheduler.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    BudgetTestInstructionsComponent,
    ProfileComponent,
    InventoryComponent,
    ProfileSummaryComponent,
    InstructionsComponent,
    FooterComponent,
    BudgetInstructionsComponent,
    WguMobileComponent,
    AppointmentSchedulerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
