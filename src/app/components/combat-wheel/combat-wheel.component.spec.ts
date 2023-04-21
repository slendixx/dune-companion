import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatWheelComponent } from './combat-wheel.component';

describe('CombatWheelComponent', () => {
  let component: CombatWheelComponent;
  let fixture: ComponentFixture<CombatWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatWheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
