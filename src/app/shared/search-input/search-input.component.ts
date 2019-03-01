import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [],
})
export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  faSearch = faSearch;
  constructor() {}

  ngOnInit() {}

  onChangeText(text: string) {
    this.search.emit(text);
  }
}
