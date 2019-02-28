import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './core/not-found/not-found.component';
import { ComicsComponent } from './comics/comics.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo:'comics' },
  { path: 'comics', loadChildren: './comics/comics.module#ComicsModule'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
