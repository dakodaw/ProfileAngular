import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInstructionsComponent } from './budget-instructions.component';

describe('BudgetInstructionsComponent', () => {
  let component: BudgetInstructionsComponent;
  let fixture: ComponentFixture<BudgetInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
