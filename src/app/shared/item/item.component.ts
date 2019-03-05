import { Component, OnInit, Input } from '@angular/core';

import { Image } from '../../core/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [],
})
export class ItemComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() image: Image;
}
