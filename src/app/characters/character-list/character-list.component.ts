import { Component, Input } from '@angular/core';
import { Character } from 'src/app/core/models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styles: [],
})
export class CharacterListComponent {
  @Input() characters: Character[];

  byId(index:number,character: Character) {
    return character.id;
  }
}
