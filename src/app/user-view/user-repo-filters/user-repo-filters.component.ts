import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ORDER_DESC, SORT_BY_STARS } from '../user-view-service/user-view.service';
import { sortList, orderList } from './order-options';

@Component({
  selector: 'app-user-repo-filters',
  templateUrl: './user-repo-filters.component.html',
  styleUrls: ['./user-repo-filters.component.scss']
})
export class UserRepoFiltersComponent implements OnInit {
  @Output() filterChanged: EventEmitter<Object> = new EventEmitter<Object>();

  public sortList = sortList;
  public orderList = orderList;
  private sort = SORT_BY_STARS;
  private order = ORDER_DESC;

  updateFilters() {
    this.filterChanged.emit({
      sort: this.sort,
      order: this.order,
    });
  }

  ngOnInit() {
    this.updateFilters();
  }

}
