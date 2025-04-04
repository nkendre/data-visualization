import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhighchartComponent } from './dashboardhighchart.component';

describe('DashboardhighchartComponent', () => {
  let component: DashboardhighchartComponent;
  let fixture: ComponentFixture<DashboardhighchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardhighchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardhighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
