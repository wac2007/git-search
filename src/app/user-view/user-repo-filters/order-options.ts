import {
  ORDER_ASC, ORDER_DESC, SORT_BY_STARS, SORT_BY_CREATE, SORT_BY_NAME,
  SORT_BY_PUSH, SORT_BY_UPDATE
} from '../order.constants';

export const sortList = [
  {
    label: 'Stars',
    value: SORT_BY_STARS
  },
  {
    label: 'Created',
    value: SORT_BY_CREATE
  },
  {
    label: 'Name',
    value: SORT_BY_NAME
  },
  {
    label: 'Last Push',
    value: SORT_BY_PUSH
  },
  {
    label: 'Updated',
    value: SORT_BY_UPDATE
  },
];

export const orderList = [
  {
    label: 'Asc',
    value: ORDER_ASC,
  },
  {
    label: 'Desc',
    value: ORDER_DESC
  },
];
