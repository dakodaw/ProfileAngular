import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WguMobileComponent } from './wgu-mobile.component';

describe('WguMobileComponent', () => {
  let component: WguMobileComponent;
  let fixture: ComponentFixture<WguMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WguMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WguMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
