import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html'
})
export class UserReposComponent {
  @Input() repoList: Array<Object>;
}
