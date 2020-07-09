import { Component } from '@angular/core';


import {ClientService} from '../../../services/client.service'
import { NgForm } from '@angular/forms';
import { Client } from '../../../model/client';

@Component({
  selector: 'app-clientManagement',
  templateUrl: './clientManagement.component.html',
  styleUrls: ['./clientManagement.component.sass'],
})
export class ClientManagementComponent {
  constructor(public clientService: ClientService) {}

  resetForm(clientManagementForm: NgForm): void {
    try {
      if (clientManagementForm) {
        clientManagementForm.reset();
        this.clientService.currentClient = new Client();
      }
    } catch (error) {
      console.error('resetForm');
    }
  }

  onSubmit(clientManagementForm: NgForm): void {
    try {
      if (
        this.clientService.ValidateClient(
          clientManagementForm.value,
          !!clientManagementForm.value.$key
        )
      ) {
        this.ActionSave(clientManagementForm)
      } else {
        alert("Parameters invalid");

      }
    } catch (error) {
      console.error('onSubmit =>', error);
      alert(`Error operation:${error.message}`);
    }
  }

  ActionSave(clientManagementForm: NgForm) {
    if (clientManagementForm.value.$key == null)
      this.clientService.insertClient(clientManagementForm.value);
    else this.clientService.updateClient(clientManagementForm.value);
    this.resetForm(clientManagementForm);
    alert('Success operation');
  }
}
