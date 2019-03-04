import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http/http';

import { CharactersComponent } from './characters.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: CharactersComponent }];

@NgModule({
  declarations: [CharactersComponent, CharacterListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    // HttpClientModule, //is not necessary to put here HttpClientModule, because we have to import in coreModule because characterService has root providein
  ],
})
export class CharactersModule {}
