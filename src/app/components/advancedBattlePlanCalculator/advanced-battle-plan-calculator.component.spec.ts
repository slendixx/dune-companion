import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedBattlePlanCalculator } from './advanced-battle-plan-calculator.component';

describe('PlanBatallaAvanzadoComponent', () => {
  let component: AdvancedBattlePlanCalculator;
  let fixture: ComponentFixture<AdvancedBattlePlanCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedBattlePlanCalculator ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedBattlePlanCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
