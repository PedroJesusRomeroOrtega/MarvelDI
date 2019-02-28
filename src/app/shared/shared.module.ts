import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageVisualizerComponent } from './image-visualizer/image-visualizer.component';
import { SearchInputComponent } from './search-input/search-input.component';

const components = [ImageVisualizerComponent, SearchInputComponent];

@NgModule({
  declarations: [components, SearchInputComponent],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
