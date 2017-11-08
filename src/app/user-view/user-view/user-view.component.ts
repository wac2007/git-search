import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserViewService } from '../user-view-service/user-view.service';
import { Repo } from '../../types/repo';
import { User } from '../../types/user';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  private username;
  public userProfile: User;
  public userRepos: Array<Repo>;

  constructor(
    private userViewService: UserViewService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((routeParams) => {
      this.username = routeParams.username;
      this.getUserData();
    });
  }

  private getUserData() {
    this.userViewService.getUserProfileData(this.username).subscribe((userProfile) => {
      this.userProfile = userProfile;
    });
  }

  public getRepos(filters) {
    this.userViewService.getUserReposData(this.username, filters.sort, filters.order).subscribe((userRepos) => {
      this.userRepos = userRepos;
    });
  }
}
