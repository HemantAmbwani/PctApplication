import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCsvComponent } from './employee-csv.component';

describe('EmployeeCsvComponent', () => {
  let component: EmployeeCsvComponent;
  let fixture: ComponentFixture<EmployeeCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
