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
export class ComicsComponent implements OnInit, OnDestroy {
  private _destroyed$: Subject<void> = new Subject();
  comics$: Observable<Comic[]>;
  comics: any;

  constructor(private comicsService: ComicsService) {}

  ngOnInit() {
    this.comics$= this.comicsService.getComics();
    // this.comicsService
    //   .getComics()
    //   .pipe(takeUntil(this._destroyed$))
    //   .subscribe((comics: Comic[]) => (this.comics = comics));
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
