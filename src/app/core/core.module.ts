import { MessageService } from './services/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const components = [NavBarComponent, NotFoundComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components],
  providers: [MessageService] //is better to put providein:'root' in messageService, because we can benefit of treeshake
})
export class CoreModule {}
