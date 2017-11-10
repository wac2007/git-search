import { Component, Input } from '@angular/core';

import { Repo } from '../../shared/domains/repo';


@Component({
  selector: 'app-user-repo-item',
  templateUrl: './user-repo-item.component.html',
  styleUrls: ['./user-repo-item.component.scss']
})
export class UserRepoItemComponent {
  @Input() repoItem: Repo;
}
