import {Component, Input} from '@angular/core';
import {Faction} from "../../../interfaces/faction";

@Component({
  selector: 'app-guild-info',
  templateUrl: './guild-info-component.html',
  styleUrls: ['./guild-info.component.scss']
})
export class GuildInfoComponent {

  @Input() faction!: Faction | null;
}
