import {Component, Input} from '@angular/core';
import {Faction} from "../../../interfaces/faction";

@Component({
  selector: 'app-bene-gesserit-info',
  templateUrl: './bene-gesserit-info-component.html',
  styleUrls: ['./bene-gesserit-info.component.scss']
})
export class BeneGesseritInfoComponent {

  @Input() faction!: Faction | null;
}
