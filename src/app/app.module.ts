import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { BudgetTestInstructionsComponent } from './budget-test-instructions/budget-test-instructions.component';
import { ProfileComponent } from './profile/profile.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProfileSummaryComponent } from './profile-summary/profile-summary.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    BudgetTestInstructionsComponent,
    ProfileComponent,
    InventoryComponent,
    ProfileSummaryComponent,
    InstructionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
