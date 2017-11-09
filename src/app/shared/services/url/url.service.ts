export class UrlService {

  public buildUrl(url, uri, queryString?) {
    return this.appendQueryString(this.joinUri(url, uri), queryString);
  }
  public removeEndSlash(url: String) {
    return url.endsWith('/') ? url.substr(0, url.length - 1 ) : url;
  }

  public addStartSlash(uri: String) {
    return uri.startsWith('/') ? uri : `/${uri}`;
  }

  public joinUri(url: String, uri?: String) {
    const newUrl = this.removeEndSlash(url);
    if (!uri) { return newUrl; }
    const newUri = this.removeEndSlash(this.addStartSlash(uri));
    return `${newUrl}${newUri}`;
  }

  public appendQueryString(url, queryString) {
    if (!queryString || Object.keys(queryString).length < 1) {
      return url;
    }
    const query = this.stringifyQuery(queryString);
    return `${url}?${query}`;
  }

  private stringifyQuery(queryString) {
    return Object.entries(queryString)
      .map(([index, value]) => `${index}=${value}`)
      .join('&');
  }

}
