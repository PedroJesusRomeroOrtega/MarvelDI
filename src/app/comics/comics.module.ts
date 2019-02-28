import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { Routes, RouterModule } from '@angular/router';
import { ComicsServiceModule } from './comics.service.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: ComicsComponent }];

@NgModule({
  declarations: [ComicsComponent],
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes), ComicsServiceModule],
  exports: [ComicsComponent],
})
export class ComicsModule {}
