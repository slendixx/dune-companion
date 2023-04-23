import {Component, Input} from '@angular/core';
import {Faction} from "../../../interfaces/faction";

@Component({
  selector: 'app-emperor-info',
  templateUrl: './emperor-info-component.html',
  styleUrls: ['./emperor-info.component.scss']
})
export class EmperorInfoComponent {

  @Input() faction!: Faction | null;
}
