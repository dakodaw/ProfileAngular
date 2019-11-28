import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTestInstructionsComponent } from './budget-test-instructions.component';

describe('BudgetTestInstructionsComponent', () => {
  let component: BudgetTestInstructionsComponent;
  let fixture: ComponentFixture<BudgetTestInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetTestInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTestInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
