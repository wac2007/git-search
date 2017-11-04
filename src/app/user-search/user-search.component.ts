import { Component } from '@angular/core';
import { UserSearchService } from './user-search-service/user-search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent {
  results: Object;
  searchTerm = new Subject<string>();
  resultDisplayLimit = 5;

  constructor(public searchService: UserSearchService) {
    this.searchService.search(this.searchTerm)
      .subscribe(results => {
        this.results = results.items;
      });
  }

}
