import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearAndEngineeringComponentsComponent } from './gear-and-engineering-components.component';

describe('GearAndEngineeringComponentsComponent', () => {
  let component: GearAndEngineeringComponentsComponent;
  let fixture: ComponentFixture<GearAndEngineeringComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearAndEngineeringComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GearAndEngineeringComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
