import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { environment } from '../../../../environments/environment';
import { UrlService } from '../url/url.service';


@Injectable()
export class RequestService {
  private url: UrlService;

  constructor(
    private http: Http
  ) {
    this.url = new UrlService();
  }

  buildUrl(uri: String, queryString?: Object, url?: String) {
    const _url = url || this.getUrl();
    return this.url.buildUrl(_url, uri, queryString);
  }

  getUrl() {
    return environment.API_URL;
  }

  get(uri: String, queryString?: Object, url?: String, options?: Object) {
    return this.http
      .get(this.buildUrl(uri, queryString, url), this.getHttpOptions());
  }

  private getHttpOptions() {
    const headers = new Headers({ 'Authorization': `token ${environment.githubToken}` });
    return new RequestOptions({ headers });
  }

}
