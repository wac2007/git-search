import { repoMock } from '../../repo-view-service/repoMock';

const README_MOCK_FILE = './readmeMock.md';
const MOCK_REPO_README_URL = 'https://raw.githubusercontent.com/wac2007/django-debug/master/readme.md';
const MOCK_REPO_URL = 'https://api.github.com/repos/wac2007/django-debug';

export function getMock(url) {
  if (url === MOCK_REPO_README_URL) {
    return README_MOCK_FILE;
  } else if (url === MOCK_REPO_URL) {
    return repoMock;
  }
  return null;
}

export const PARAM_USERNAME = 'wac2007';
export const PARAM_REPO = 'django-debug';

export const NAME_SELECTOR = '.repo-title';
export const STARS_SELECTOR = '.repo-info[title=Stars]';
export const LANGUAGE_SELECTOR = '.repo-info[title=Language]';
export const EXTERNAL_LINK_SELECTOR = '.repo-link';
export const DESCRIPTION_SELECTOR = '.repo-description';
