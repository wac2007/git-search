import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss']
})
export class RepoInfoComponent {
  @Input() label: String;
  @Input() title: String;
  @Input() icon: String;
  @Input() target: String;
  @Input() href: String;
}
