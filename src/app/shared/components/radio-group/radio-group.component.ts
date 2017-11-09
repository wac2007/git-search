import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RadioItem } from './radio-item';


@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html'
})
export class RadioGroupComponent {
  @Input() radioItems: Array<RadioItem>;
  @Input() model: any;
  @Output() modelChange: EventEmitter<RadioItem>;

  constructor() {
    this.modelChange = new EventEmitter<RadioItem>();
  }

  isChecked(radioItem: RadioItem) {
    return this.model === radioItem.value;
  }

  changed(model: RadioItem) {
    this.model = model;
    this.modelChange.emit(model);
  }
}
