import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class UserSearchService {
  private baseUrl: String = 'https://api.github.com/search/users';
  private queryUrl: String = '?q=';

  constructor(private http: Http) { }

    search(terms: Observable<string>) {
      return terms.debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.searchUsers(term));
    }

    searchUsers(username) {
      return this.http
          .get(`${this.baseUrl}${this.queryUrl}${username}`)
          .map(res => res.json());
    }

}
