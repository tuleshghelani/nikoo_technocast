import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureAndEarthMoversComponent } from './agriculture-and-earth-movers.component';

describe('AgricultureAndEarthMoversComponent', () => {
  let component: AgricultureAndEarthMoversComponent;
  let fixture: ComponentFixture<AgricultureAndEarthMoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgricultureAndEarthMoversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgricultureAndEarthMoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
