import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-combat-wheel',
  templateUrl: './combat-wheel.component.html',
  styleUrls: ['./combat-wheel.component.scss']
})
export class CombatWheelComponent {

  @Input() combatWheelDial: number = 0;
}
