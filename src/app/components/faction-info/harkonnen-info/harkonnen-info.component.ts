import {Component, Input} from '@angular/core';
import {Faction} from "../../../interfaces/faction";

@Component({
  selector: 'app-harkonnen-info',
  templateUrl: './harkonnen-info-component.html',
  styleUrls: ['./harkonnen-info.component.scss']
})
export class HarkonnenInfoComponent {

  @Input() faction!: Faction | null;
}
