import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {
  @Input() title: String;
  @Input() icon: String;
  @Input() url: String;
  @Input() label: String;
}
