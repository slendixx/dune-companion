import {Component, Input} from '@angular/core';
import {Faction} from "../../../interfaces/faction";

@Component({
  selector: 'app-fremen-info',
  templateUrl: './fremen-info-component.html',
  styleUrls: ['./fremen-info.component.scss']
})
export class FremenInfoComponent {

  @Input() faction!: Faction | null;
}
