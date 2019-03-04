import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

import { ComicsComponent } from './comics.component';
import { ComicsServiceModule } from './comics.service.module';
import { ComicListComponent } from './comic-list/comic-list.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: ComicsComponent }];

@NgModule({
  declarations: [ComicsComponent, ComicListComponent],
  imports: [
    CommonModule,
    // HttpClientModule,
    RouterModule.forChild(routes),
    ComicsServiceModule,
    SharedModule,
  ],
})
export class ComicsModule {}
