import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-troops-control',
  templateUrl: './troops-control.component.html',
  styleUrls: ['./troops-control.component.scss']
})
export class TroopsControlComponent {
  @Input() iconSrc!: string;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Input() removeDisabled: boolean = false;
  @Input() addDisabled: boolean = false;


  handleAdd() {
    this.add.emit();
  }

  handleRemove() {
    this.remove.emit();
  }
}
