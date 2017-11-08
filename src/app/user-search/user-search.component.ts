import { Component, OnInit } from '@angular/core';
import { UserSearchService } from './user-search-service/user-search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  results: Object;
  searchTerm = new Subject<string>();
  resultDisplayLimit = 5;
  loading = false;

  constructor(public searchService: UserSearchService) {
  }

  ngOnInit() {
    this.searchWatch(this.searchTerm);
    this.searchService.search(this.searchTerm)
      .subscribe(results => {
        this.results = results.items;
        this.loading = false;
      });
  }

  searchWatch(subject: Subject<any>) {
    return subject.debounceTime(400)
      .distinctUntilChanged()
      .subscribe(() => this.loading = true);
  }

}
