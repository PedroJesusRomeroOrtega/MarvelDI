import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../core/services';

@Component({
  selector: 'app-show-opinion',
  templateUrl: './show-opinion.component.html',
  styles: []
})
export class ShowOpinionComponent implements OnInit {
opinions:string[];

  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.opinions = this.messageService.messages;
  }

}
