import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageVisualizerComponent } from './image-visualizer/image-visualizer.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { AddOpinionComponent } from './add-opinion/add-opinion.component';
import { ShowOpinionComponent } from './show-opinion/show-opinion.component';

const components = [ImageVisualizerComponent, SearchInputComponent,AddOpinionComponent,ShowOpinionComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
