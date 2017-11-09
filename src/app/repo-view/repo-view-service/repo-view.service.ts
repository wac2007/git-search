import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RequestService } from '../../shared/services/request/request.service';


@Injectable()
export class RepoViewService {
  constructor(
    private http: Http,
    private request: RequestService
  ) { }

  getRepoData(repoName) {
    return this.request
      .get(this.getRepoUri(repoName))
      .map(res => res.json());
  }

  getRepoReadme(repoName) {
    return this.http
      .get(this.getRepoReadmeUrl(repoName))
      .map(res => res.text());
  }

  private getRepoUri(repoName) {
    return `/repos/${repoName}`;
  }

  private getRepoReadmeUrl(repoName) {
    return `https://raw.githubusercontent.com/${repoName}/master/readme.md`;
  }

}
