import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const components = [NavBarComponent, NotFoundComponent, FooterComponent, HeaderComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, //try to remove httpClientModule, and uncomment in ComicsModule and CharactersModule. What happens with charactersmodule???
    SharedModule,
  ],
  exports: [components],
  providers: [MessageService], //is better to use providein:'root' in messageService, because we can benefit of treeshake
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
