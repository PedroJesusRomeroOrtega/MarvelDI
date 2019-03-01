import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const components = [NavBarComponent, NotFoundComponent, FooterComponent, HeaderComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, HttpClientModule, FontAwesomeModule], //try to remove httpClientModule, what happens with charactersmodule???
  exports: [components,FontAwesomeModule],
  providers: [MessageService], //is better to put providein:'root' in messageService, because we can benefit of treeshake
})
export class CoreModule {}
