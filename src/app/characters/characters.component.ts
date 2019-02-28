import { CharactersService } from './characters.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Character } from '../core/models';
import { MessageService } from '../core/services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: [],
  providers: [MessageService], // try to comment to see that all opinions are shown without taking into account if you are in characters or comics
})
export class CharactersComponent implements OnInit, OnDestroy {
  private _destroyed$: Subject<void> = new Subject();
  private suscription: Subscription;
  characters: Character[];
  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
   this.suscription= this.charactersService
      .getCharacters()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((characters) => (this.characters = characters));

  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  searchCharacter(textToSeach: string) {
    this.suscription.unsubscribe();
    this.suscription=this.charactersService
      .getCharacters(textToSeach)
      .pipe(takeUntil(this._destroyed$))
      .subscribe((characters) => (this.characters = characters));
  }
}
