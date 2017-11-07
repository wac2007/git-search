import { userMock } from '../../user-view-service/githubUserMock';
import { userReposMock } from '../../user-view-service/githubUserReposMock';


export const PROFILE_SECTION_SELECTOR = '.profile';
export const REPOS_SECTION_SELECTOR = 'app-user-repos';
export const PARAM_USERNAME = 'wac2007';

const MOCK_PROFILE_URL = 'https://api.github.com/users/wac2007';
const MOCK_REPOS_URL = 'https://api.github.com/users/wac2007/repos?sort=stars&direction=desc';

export function getMock(url) {
  if (url === MOCK_PROFILE_URL) {
    return userMock;
  } else if (url === MOCK_REPOS_URL) {
    return userReposMock;
  }
  return null;
}
