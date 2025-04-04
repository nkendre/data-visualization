import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarhighchartComponent } from './barhighchart.component';

describe('BarhighchartComponent', () => {
  let component: BarhighchartComponent;
  let fixture: ComponentFixture<BarhighchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarhighchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarhighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
