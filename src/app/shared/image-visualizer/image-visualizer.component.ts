import { Component, OnInit, Input } from '@angular/core';

import { Image } from 'src/app/core/models';

@Component({
  selector: 'app-image-visualizer',
  templateUrl: './image-visualizer.component.html',
  styles: [],
})
export class ImageVisualizerComponent implements OnInit {
  @Input() image: Image;
  imagePath: string;

  constructor() {}

  ngOnInit() {
    // TODO: create a service provide in component to retrieve the size of the image
    this.imagePath = `${this.image.path}/detail.${this.image.extension}`;
  }
}
