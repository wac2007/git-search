import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserViewService } from '../user-view-service/user-view.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  private userProfile: Object;
  private userRepos: Array<Object>;

  constructor(
    private userViewService: UserViewService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((routeParams) => {
      this.userViewService.getUserProfileData(routeParams.username).subscribe((userProfile) => {
        this.userProfile = userProfile;
      });

      this.userViewService.getUserReposData(routeParams.username).subscribe((userRepos) => {
        this.userRepos = userRepos;
      });
    });
  }

}
