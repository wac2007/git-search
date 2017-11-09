import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../../environments/environment';
import { ORDER_ASC, SORT_BY_STARS } from '../order.constants';
import { OrderFilter } from '../order-filter';
import { RequestService } from '../../shared/services/request/request.service';


@Injectable()
export class UserViewService {

  constructor(
    private http: Http,
    private request: RequestService,
  ) { }

  getUserProfileData(username) {
    return this.request
        .get(this.getUserProfileUri(username))
        .map(res => res.json());
  }

  getUserReposData(username, filters: OrderFilter) {
    return this.request
    .get(this.getUserReposUri(username), {
      sort: filters.sort,
      direction: filters.order
    })
    .map(res => res.json())
    .map(res => this.order(res, filters.sort, filters.order));
  }

  private getUserProfileUri(username) {
    return `/users/${username}`;
  }

  private getUserReposUri(username) {
    return `/users/${username}/repos`;
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
    return sort === SORT_BY_STARS ? userRepos.sort(this.starsSorter(order)) : userRepos;
  }
}
