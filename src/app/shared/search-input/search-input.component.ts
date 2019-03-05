import { Component, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [],
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();
  faSearch = faSearch;

  onChangeText(text: string) {
    this.search.emit(text);
  }
}
