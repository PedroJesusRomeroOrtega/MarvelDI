import { MessageService } from '../../core/services';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-opinion',
  templateUrl: './add-opinion.component.html',
  styles: [],
})
export class AddOpinionComponent {
  constructor(private messageService: MessageService) {}

  AddOpinion(text: string) {
    this.messageService.add(text);
  }
}
