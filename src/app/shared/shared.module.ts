import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageVisualizerComponent } from './image-visualizer/image-visualizer.component';

const components = [ImageVisualizerComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components],
})
export class SharedModule {}
