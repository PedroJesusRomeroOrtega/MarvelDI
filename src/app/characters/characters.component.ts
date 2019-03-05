import { CharactersService } from './characters.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Character } from '../core/models';
import { MessageService } from '../core/services';
import { debounceTime, distinctUntilChanged, switchMapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [],
  providers: [MessageService], // try to comment to see that all opinions are shown without taking into account if you are in characters or comics
})
export class CharactersComponent implements OnInit {
  // private _destroyed$: Subject<void> = new Subject();
  // private suscription: Subscription;
  // characters: Character[];
  searchCharacters = new Subject<string>();
  characters$: Observable<Character[]>;

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    //  this.suscription= this.charactersService
    //     .getCharacters()
    //     .pipe(takeUntil(this._destroyed$))
    //     .subscribe((characters) => (this.characters = characters));
    this.characters$ = this.searchCharacters.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((textToSearch) => this.charactersService.getCharacters(textToSearch)),
    );
  }

  // ngOnDestroy(): void {
  //   this._destroyed$.next();
  //   this._destroyed$.complete();
  // }

  searchCharacter(textToSearch: string) {
    // this.suscription.unsubscribe();
    // this.suscription=this.charactersService
    //   .getCharacters(textToSeach)
    //   .pipe(takeUntil(this._destroyed$))
    //   .subscribe((characters) => (this.characters = characters));
    this.searchCharacters.next(textToSearch);
  }
}
