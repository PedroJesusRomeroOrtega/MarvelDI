import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ImageVisualizerComponent } from './image-visualizer/image-visualizer.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { AddOpinionComponent } from './add-opinion/add-opinion.component';
import { ShowOpinionComponent } from './show-opinion/show-opinion.component';
import { ItemComponent } from './item/item.component';

const components = [
  ImageVisualizerComponent,
  SearchInputComponent,
  AddOpinionComponent,
  ShowOpinionComponent,
  ItemComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, FontAwesomeModule],
  exports: [components, FontAwesomeModule],
})
export class SharedModule {
  constructor() {
    library.add(faSearch);
  }
}
