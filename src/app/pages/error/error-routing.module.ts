import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ErrorRoutingModule {}
