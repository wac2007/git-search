import { TestBed, inject } from '@angular/core/testing';

import { UrlService } from './url.service';
import {
  URL_END_SLASH, URL_WITHOUT_SLASH, URI_WITHOUT_SLASH, URI_WITH_SLASH, QUERYSTRING, SIMPLE_URL,
  FULL_URL_WITH_QUERYSTRING, EMPTY_QUERYSTRING, JOIN_FULL_URL, JOIN_SIMPLE_URL, JOIN_URI_WITH_SLASH,
  JOIN_URI_WITHOUT_SLASH, BUILD_FULL_URL, BUILD_QUERYSTRING, BUILD_SIMPLE_URL, BUILD_URI
} from './url.service.test-options';


describe('UrlService', () => {
  let urlService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlService]
    });
  });

  beforeEach(inject([UrlService], (service: UrlService) => {
    urlService = service;
  }));

  it('should be created', () => {
    expect(urlService).toBeTruthy();
  });

  describe('UrlService: removeEndSlash', () => {
    it('should remove slash at end', () => {
    const urlWithoutSlash = urlService.removeEndSlash(URL_END_SLASH);
      expect(urlWithoutSlash).toBe(URL_WITHOUT_SLASH);
    });
    it('should return the same url', () => {
      const urlWithoutSlash = urlService.removeEndSlash(URL_WITHOUT_SLASH);
      expect(urlWithoutSlash).toBe(URL_WITHOUT_SLASH);
    });
  });

  describe('UrlService: addStartSlash', () => {
    it('should add slash at begin', () => {
      const uriWithSlash = urlService.addStartSlash(URI_WITHOUT_SLASH);
      expect(uriWithSlash).toBe(URI_WITH_SLASH);
    });
    it('should return the same url', () => {
      const uriWithSlash = urlService.addStartSlash(URI_WITH_SLASH);
      expect(uriWithSlash).toBe(URI_WITH_SLASH);
    });
  });

  describe('UrlService: appendQueryString', () => {
    it('should append querystring to url', () => {
      const fullUrl = urlService.appendQueryString(SIMPLE_URL, QUERYSTRING);
      expect(fullUrl).toBe(FULL_URL_WITH_QUERYSTRING);
    });
    it('should return the same url', () => {
      const fullUrl = urlService.appendQueryString(SIMPLE_URL, EMPTY_QUERYSTRING);
      expect(fullUrl).toBe(SIMPLE_URL);
    });
  });

  describe('UrlService: joinUri', () => {
    it('should join slashed uri', () => {
      const fullUrl = urlService.joinUri(JOIN_SIMPLE_URL, JOIN_URI_WITH_SLASH);
      expect(fullUrl).toBe(JOIN_FULL_URL);
    });
    it('should join unslashed uri', () => {
      const fullUrl = urlService.joinUri(JOIN_SIMPLE_URL, JOIN_URI_WITHOUT_SLASH);
      expect(fullUrl).toBe(JOIN_FULL_URL);
    });
  });

  describe('UrlService: buildUrl', () => {
    it('should join slashed uri', () => {
      const fullUrl = urlService.buildUrl(JOIN_SIMPLE_URL, BUILD_URI, BUILD_QUERYSTRING);
      expect(fullUrl).toBe(BUILD_FULL_URL);
    });
  });
});
