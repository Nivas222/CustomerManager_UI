import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCustomerComponent } from './one-customer.component';

describe('OneCustomerComponent', () => {
  let component: OneCustomerComponent;
  let fixture: ComponentFixture<OneCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
