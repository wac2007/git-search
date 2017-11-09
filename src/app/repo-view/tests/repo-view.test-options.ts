import { repoMock } from '../../shared/mocks/repoMock';

export const TITLE_SELECTOR = '.repo-title';
export const INFO_STARS_SELECTOR = '.repo-info[title=Stars]';
export const INFO_LANGUAGE_SELECTOR = '.repo-info[title=Language]';
export const INFO_LINK_SELECTOR = '.repo-link';
export const INFO_DESCRIPTION_SELECTOR = '.repo-description';
export const README_SELECTOR = 'app-readme-container';

export const REPO_MOCK = repoMock;
export const PARAM_USERNAME = 'wac2007';
export const PARAM_REPO = 'posicoes-onibus-rj';
export const ROUTE_PARAMS = {
  repoOwner: PARAM_USERNAME,
  repoName: PARAM_REPO,
};
