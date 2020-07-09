import { Injectable } from '@angular/core';

import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Client } from '../model/client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientList : AngularFireList<any>;

  currentClient : Client = new Client();

  constructor(private firebase: AngularFireDatabase) { }

  getClients():AngularFireList<any>{
    return this.clientList = this.firebase.list("client");
  }

  insertClient(objClient:Client){
   this.clientList.push({
     name:objClient.name,
     lastName:objClient.lastName,
     age:objClient.age,
     dateOfBirth:objClient.dateOfBirth
   })
  }

  updateClient(objClient:Client){
    this.clientList.update(objClient.$key,{
      name:objClient.name,
      lastName:objClient.lastName,
      age:objClient.age,
      dateOfBirth:objClient.dateOfBirth
    })
   }

   deleteClient(objClient:Client){
    this.clientList.remove(objClient.$key)
   }


}
