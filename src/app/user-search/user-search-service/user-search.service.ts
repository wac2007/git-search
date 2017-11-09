import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { RequestService } from '../../shared/services/request/request.service';


@Injectable()
export class UserSearchService {

  constructor(
    private http: Http,
    private request: RequestService,
  ) { }

    search(terms: Observable<string>) {
      return terms.debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.searchUsers(term));
    }

    searchUsers(username) {
      if (!username) {
        return [];
      }
      return this.request
          .get('search/users', { q: username })
          .map(res => res.json());
    }

}
