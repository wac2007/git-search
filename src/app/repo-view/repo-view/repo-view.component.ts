import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { RepoViewService } from '../repo-view-service/repo-view.service';
import { Repo } from '../../types/repo';


@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.scss']
})
export class RepoViewComponent {
  private repoFullName: String;
  private repoInfo: Repo;
  private readmeTemplate: any;

  constructor(
    private route: ActivatedRoute,
    private repoViewService: RepoViewService,
    private http: Http
  ) {
    this.route.params.subscribe((routeParams) => {
      this.repoFullName = `${routeParams.repoOwner}/${routeParams.repoName}`;
      this.getRepoData();
      this.getReadme();
    });
  }

  private getRepoData() {
    this.repoViewService.getRepoData(this.repoFullName).subscribe((repoData) => {
      this.repoInfo = repoData;
    });
  }

  private getReadme() {
    this.repoViewService.getRepoReadme(this.repoFullName).subscribe(
      (repoContent) => {
        this.readmeTemplate = repoContent;
      },
      (error) => {
        this.readmeTemplate = '### No readme.md found in this repository';
      }
    );
  }
}
