import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientWindowFormComponent } from './client/windowForm/clientWindowForm.component';

const routes: Routes = [
  {
    path: '',
    component: ClientWindowFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class UserRoutingModule {}
