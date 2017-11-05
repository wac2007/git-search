import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { RepoViewService } from '../repo-view-service/repo-view.service';


@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.scss']
})
export class RepoViewComponent {
  private repoFullName: String;
  private repoInfo;

  constructor(
    private route: ActivatedRoute,
    private repoViewService: RepoViewService,
    private location: Location
  ) {
    this.route.params.subscribe((routeParams) => {
      this.repoFullName = `${routeParams.repoOwner}/${routeParams.repoName}`;
    });
    this.getRepoData();
  }

  private getRepoData() {
    this.repoViewService.getRepoData(this.repoFullName).subscribe((repoData) => {
      this.repoInfo = repoData;
    });
  }

  private goBack() {
    this.location.back();
  }
}
