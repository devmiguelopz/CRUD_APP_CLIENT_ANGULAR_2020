import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//lazy loading routes
const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./pages/user/user.module').then(mod => mod.UserModule)
  },
  {
    path: '**',
    loadChildren: ()=> import('./pages/error/error.module').then(mod => mod.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
