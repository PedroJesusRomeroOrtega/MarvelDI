import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ComicsService } from './comics.service';
import { Comic } from '../core/models';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styles: [],
})
export class ComicsComponent implements OnInit {
  comics$: Observable<Comic[]>;
  comics: Comic[];

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    this.comics$= this.comicsService.getComics();
  }

}
