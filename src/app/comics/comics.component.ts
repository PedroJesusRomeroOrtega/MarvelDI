import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ComicsService } from './comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styles: [],
})
export class ComicsComponent implements OnInit, OnDestroy {
  private _destroyed$: Subject<void> = new Subject();
  comics: any;

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    this.comicsService
      .getComics()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((comics) => (this.comics = comics.data.results));
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
