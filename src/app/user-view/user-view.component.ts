import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserViewService } from './user-view-service/user-view.service';
import { Repo } from '../shared/domains/repo';
import { User } from '../shared/domains/user';
import { ORDER_DESC, SORT_BY_STARS } from './order.constants';
import { OrderFilter } from './order-filter';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  private username;
  public userProfile: User;
  public userRepos: Array<Repo>;
  public filters: OrderFilter;
  public sort: String;

  constructor(
    private userViewService: UserViewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.filters = {
      sort: SORT_BY_STARS,
      order: ORDER_DESC
    };
    this.route.params.subscribe((routeParams) => {
      this.username = routeParams.username;
      this.getUserData();
      this.getRepos(this.filters);
    });
  }

  private getUserData() {
    this.userViewService.getUserProfileData(this.username).subscribe((userProfile) => {
      this.userProfile = userProfile;
    });
  }

  public getRepos(filters) {
    this.filters = filters;
    this.userViewService
      .getUserReposData(this.username, filters)
      .subscribe((userRepos) => {
        this.userRepos = userRepos;
      });
  }
}
