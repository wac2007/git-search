import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  UserViewService, ORDER_ASC, ORDER_DESC, SORT_BY_STARS
} from '../user-view-service/user-view.service';
import { sortList, orderList } from './order-options';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {
  private username;
  private userProfile: Object;
  private userRepos: Array<Object>;
  private sort = SORT_BY_STARS;
  private order = ORDER_DESC;
  private sortList = sortList;
  private orderList = orderList;

  constructor(
    private userViewService: UserViewService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((routeParams) => {
      this.username = routeParams.username;
      this.getUserData();
      this.getRepos();
    });
  }

  private getUserData() {
    this.userViewService.getUserProfileData(this.username).subscribe((userProfile) => {
      this.userProfile = userProfile;
    });
  }

  private getRepos() {
    this.userViewService.getUserReposData(this.username, this.sort, this.order).subscribe((userRepos) => {
      this.userRepos = userRepos;
    });
  }
}
