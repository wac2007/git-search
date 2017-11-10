import { Component, Input } from '@angular/core';

import { User } from '../../shared/domains/user';


@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.scss']
})
export class SearchTableComponent {
  @Input() emptyText: String = 'No Records Found!';
  @Input() rowList: Array<User>;
  @Input() resultDisplayLimit: Number = 5;
}
