import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilAndGasComponentsComponent } from './oil-and-gas-components.component';

describe('OilAndGasComponentsComponent', () => {
  let component: OilAndGasComponentsComponent;
  let fixture: ComponentFixture<OilAndGasComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilAndGasComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OilAndGasComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
