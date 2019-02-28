import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'src/app/core/models';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styles: [],
})
export class ComicListComponent {
  @Input() comics: Comic[];

  byId(comic: Comic) {
    return comic.id;
  }
}
