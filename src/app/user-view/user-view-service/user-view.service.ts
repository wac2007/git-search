import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export const SORT_BY_STARS = 'stars';
export const SORT_BY_NAME = 'full_name';
export const SORT_BY_CREATE = 'created';
export const SORT_BY_UPDATE = 'updated';
export const SORT_BY_PUSH = 'pushed';

export const ORDER_ASC = 'asc';
export const ORDER_DESC = 'desc';

@Injectable()
export class UserViewService {

  constructor(
    private http: Http,
  ) { }

  getUserProfileData(username) {
    return this.http
        .get(this.getUserProfileUrl(username))
        .map(res => res.json());
  }

  getUserReposData(username, sort, order) {
    return this.http
        .get(this.getUserReposUrl(username, sort, order))
        .map(res => res.json())
        .map(res => this.order(res, sort, order));
  }

  private getUserProfileUrl(username) {
    return `https://api.github.com/users/${username}`;
  }

  private getUserReposUrl(username, sort, order) {
    return `https://api.github.com/users/${username}/repos?sort=${sort}&direction=${order}`;
  }

  private getSorterModifier(order: String) {
    if (order === ORDER_ASC) {
      return 1;
    }
    return -1;
  }

  private starsSorter(order: String) {
    const modifier = this.getSorterModifier(order);
    return (repoA, repoB) => {
      if (repoA.stargazers_count > repoB.stargazers_count) {
        return 1 * modifier;
      } else if (repoA.stargazers_count < repoB.stargazers_count) {
        return -1 * modifier;
      }
      return 0;
    };
  }

  private order(userRepos, sort, order) {
    if (sort === SORT_BY_STARS) {
      return userRepos.sort(this.starsSorter(order));
    }
    return userRepos;
  }
}
