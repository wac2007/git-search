import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RepoViewService {
  constructor(
    private http: Http,
  ) { }

  getRepoData(repoName) {
    return this.http
        .get(this.getRepoUrl(repoName))
        .map(res => res.json());
  }

  private getRepoUrl(repoName) {
    return `https://api.github.com/repos/${repoName}`;
  }

}
