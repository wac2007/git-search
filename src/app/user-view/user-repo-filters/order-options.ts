import {
  ORDER_ASC, ORDER_DESC, SORT_BY_STARS, SORT_BY_CREATE, SORT_BY_NAME,
  SORT_BY_PUSH, SORT_BY_UPDATE
} from '../order.constants';
import { RadioItem } from '../../shared/components/radio-group/radio-item';


export const sortList = [
  new RadioItem('Stars', SORT_BY_STARS, 'sort'),
  new RadioItem('Created', SORT_BY_CREATE, 'sort'),
  new RadioItem('Name', SORT_BY_NAME, 'sort'),
  new RadioItem('Last Push', SORT_BY_PUSH, 'sort'),
  new RadioItem('Updated', SORT_BY_UPDATE, 'sort')
];

export const orderList = [
  new RadioItem('Asc', ORDER_ASC, 'order'),
  new RadioItem('Desc', ORDER_DESC, 'order'),
];
