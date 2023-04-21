import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-circle-icon',
  templateUrl: './circle-icon.html',
  styleUrls: ['./circle-icon.scss']
})
export class CircleIcon {

  @Input() iconSrc!: string;
}
