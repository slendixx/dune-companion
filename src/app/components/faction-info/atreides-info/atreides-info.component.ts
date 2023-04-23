import {Component, Input} from '@angular/core';
import {Faction} from "../../../interfaces/faction";

@Component({
  selector: 'app-atreides-info',
  templateUrl: './atreides-info.component.html',
  styleUrls: ['./atreides-info.component.scss']
})
export class AtreidesInfoComponent {

  @Input() faction!: Faction | null;
}
