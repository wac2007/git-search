import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { RepoViewService } from './repo-view-service/repo-view.service';
import { Repo } from '../shared/domains/repo';


@Component({
  selector: 'app-repo-view',
  templateUrl: './repo-view.component.html',
  styleUrls: ['./repo-view.component.scss']
})
export class RepoViewComponent implements OnInit {
  public repoInfo: Repo;
  private repoFullName: String;
  private readmeTemplate: any;

  constructor(
    private route: ActivatedRoute,
    private repoViewService: RepoViewService,
    private http: Http
  ) { }

  ngOnInit() {
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
