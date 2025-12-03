import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveComponentsComponent } from './automotive-components.component';

describe('AutomotiveComponentsComponent', () => {
  let component: AutomotiveComponentsComponent;
  let fixture: ComponentFixture<AutomotiveComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomotiveComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomotiveComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
