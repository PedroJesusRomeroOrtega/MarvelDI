import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [],
})
export class SearchInputComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onChangeText(text:string) {
    this.search.emit(text);
  }
}
