import { userMock } from '../../shared/mocks/userMock';
import { userReposMock } from '../../shared/mocks/userRepoListMock';
import { ORDER_ASC, SORT_BY_CREATE } from '../order.constants';


export const USER_NAME = 'wac2007';
export const USER_MOCK = userMock;
export const USER_REPO_LIST_MOCK = userReposMock;
export const FILTERS_MOCK = {
  order: ORDER_ASC,
  sort: SORT_BY_CREATE,
};
