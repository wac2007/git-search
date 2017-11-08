export const URL_END_SLASH = 'http://localhost:12345/route/';
export const URL_WITHOUT_SLASH = 'http://localhost:12345/route';
export const URI_WITHOUT_SLASH = 'api/users';
export const URI_WITH_SLASH = '/api/users';

export const QUERYSTRING = {
  foo: 1,
  bar: 'abc'
};
export const EMPTY_QUERYSTRING = {};
export const SIMPLE_URL = 'http://localhost:12345';
export const FULL_URL_WITH_QUERYSTRING = 'http://localhost:12345?foo=1&bar=abc';

export const JOIN_SIMPLE_URL = 'http://localhost:12345';
export const JOIN_URI_WITH_SLASH = '/api/user';
export const JOIN_URI_WITHOUT_SLASH = 'api/user';
export const JOIN_FULL_URL = 'http://localhost:12345/api/user';

export const BUILD_SIMPLE_URL = 'http://localhost:12345';
export const BUILD_URI = '/api/user';
export const BUILD_QUERYSTRING = {
  a: 1000,
  b: 'xyz'
};
export const BUILD_FULL_URL = 'http://localhost:12345/api/user?a=1000&b=xyz';
