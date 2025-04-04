import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarapexchartComponent } from './barapexchart.component';

describe('BarapexchartComponent', () => {
  let component: BarapexchartComponent;
  let fixture: ComponentFixture<BarapexchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarapexchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarapexchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
