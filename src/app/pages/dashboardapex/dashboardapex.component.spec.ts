import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardapexComponent } from './dashboardapex.component';

describe('DashboardapexComponent', () => {
  let component: DashboardapexComponent;
  let fixture: ComponentFixture<DashboardapexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardapexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardapexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
