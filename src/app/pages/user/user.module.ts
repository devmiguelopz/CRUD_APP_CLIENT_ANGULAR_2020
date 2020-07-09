import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';

// #region components
import { ClientWindowFormComponent } from './client/windowForm/clientWindowForm.component';
import { ClientListComponent } from './client/windowForm/components/list/clientList.component';
import { ClientManagementComponent } from './client/windowForm/components/management/clientManagement.component';
// #endregion

// #region services
import { ClientService } from './client/services/client.service';
// #endregion




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserRoutingModule
  ],
  declarations: [
    ClientWindowFormComponent,
    ClientListComponent,
    ClientManagementComponent
  ],
  providers:[
    ClientService
  ]
})

export class  UserModule { }
