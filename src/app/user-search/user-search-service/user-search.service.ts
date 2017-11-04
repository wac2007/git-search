import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class UserSearchService {

  constructor(private http: Http) { }

    search(terms: Observable<string>) {
      return terms.debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.searchUsers(term));
    }

    getUserUrl(username) {
      return `https://api.github.com/search/users?q=${username}`;
    }

    searchUsers(username) {
      if (!username) {
        return [];
      }
      return this.http
          .get(this.getUserUrl(username))
          .map(res => res.json());
    }

}
