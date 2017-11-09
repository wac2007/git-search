import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['./info-icon.component.scss']
})
export class InfoIconComponent {
  @Input() title: String;
  @Input() icon: String;
  @Input() label: String;
  @Input() url: String;
  @Input() target: String;
  @Input() inline: Boolean;
}
