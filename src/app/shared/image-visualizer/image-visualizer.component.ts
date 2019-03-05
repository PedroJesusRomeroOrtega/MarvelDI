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
  size = [
    'standard_small',
    'standard_medium',
    'standard_large',
    'standard_xlarge',
    'standard_fantastic',
    'standard_amazing',
    'detail',
  ];

  ngOnInit() {
    this.imagePath = `${this.image.path}/${this.size[6]}.${this.image.extension}`;
  }
}
