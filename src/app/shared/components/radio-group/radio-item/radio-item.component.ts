import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RadioItem } from '../radio-item';


@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.scss']
})
export class RadioItemComponent {
  @Input() radioItem: RadioItem;
  @Input() checked: boolean;
  @Output() clicked: EventEmitter<RadioItem>;

  constructor() {
    this.clicked = new EventEmitter<RadioItem>();
  }

  onClick() {
    this.clicked.emit(this.radioItem);
  }

}
