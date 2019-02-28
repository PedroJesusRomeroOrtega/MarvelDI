import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/core/models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styles: []
})
export class CharacterListComponent implements OnInit {
@Input() characters: Character[];
  constructor() { }

  ngOnInit() {
  }

}
