import { Component, EventEmitter, Input, Output } from '@angular/core';

import { sortList, orderList } from './order-options';
import { OrderFilter } from '../order-filter';
import { RadioItem } from '../../shared/components/radio-group/radio-item';


@Component({
  selector: 'app-user-repo-filters',
  templateUrl: './user-repo-filters.component.html',
  styleUrls: ['./user-repo-filters.component.scss']
})
export class UserRepoFiltersComponent {
  @Input() filters: OrderFilter;
  @Output() filterChanged: EventEmitter<OrderFilter> = new EventEmitter<OrderFilter>();

  public sortList = sortList;
  public orderList = orderList;

  updateFilters(radioItem: RadioItem) {
    const filterIndex = radioItem.group.toString();
    this.filters[filterIndex] = radioItem.value;
    this.filterChanged.emit(this.filters);
  }

}
