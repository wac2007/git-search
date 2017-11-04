import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserViewService {

  constructor(
    private http: Http,
  ) { }

  getUserProfileUrl(username) {
    return `https://api.github.com/users/${username}`;
  }

  getUserReposUrl(username) {
    return `https://api.github.com/users/${username}/repos`;
  }

  getUserProfileData(username) {
    return this.http
        .get(this.getUserProfileUrl(username))
        .map(res => res.json());
  }

  getUserReposData(username) {
    return this.http
        .get(this.getUserReposUrl(username))
        .map(res => res.json());
  }
}
