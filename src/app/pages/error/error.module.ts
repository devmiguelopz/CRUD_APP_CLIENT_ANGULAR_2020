import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorRoutingModule } from './error-routing.module';
import { Error404Component } from './404/error404.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorRoutingModule
  ],
  declarations: [
    Error404Component
  ]
})
export class  ErrorModule { }
