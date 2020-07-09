
import { Component, OnInit } from '@angular/core';



import {ClientService} from '../../../services/client.service'
import { Client } from '../../../model/client';



@Component({
  selector: 'app-clientList',
  templateUrl: './clientList.component.html',
  styleUrls: ['./clientList.component.sass'],
})
export class ClientListComponent implements OnInit {

  clientList: Client[];
  clientAgeList: number[];
  average:number = 0
  standardDeviation:number = 0

  constructor(public clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients()
    .snapshotChanges()
    .subscribe(itemClient =>{
      this.clientList = [];
      this.clientAgeList = [];
      itemClient.forEach( element => {
        const currentElement = element.payload.toJSON();
        currentElement["$key"] = element.key;
        this.clientList.push(currentElement as Client)
        this.clientAgeList.push((currentElement as Client).age)
      })
      this.CalculateAverage()
      this.StandardDeviation()
    })
  }

  CalculateAverage(){
    try {
      if (this.clientAgeList.length) {
        this.average = Math.round(this.GetAverage(this.clientAgeList));
      }
    } catch (error) {
      console.error("CalculateAverage =>", error);
    }
  }

  StandardDeviation(){
    try {
      if (this.clientAgeList.length) {
        this.standardDeviation = Math.round(
          this.GetStandardDeviation(this.clientAgeList)
        );
      }
    } catch (error) {
      console.error("StandardDeviation =>", error);
    }
  }

  onEdit(objClient:Client){
    try {
      this.clientService.currentClient = Object.assign({},objClient)
    } catch (error) {
      console.error("onEdit =>", error);
    }
  }

  onDelete(objClient : Client){
    try {
      if (confirm("Are you sure you want to do this action?")) {
        this.clientService.deleteClient(objClient);
        alert("Success operation")
      }


    } catch (error) {
      console.error("onDelete =>", error);
      alert(`Error operation:${error.message}`)
    }
  }

  GetStandardDeviation(values){
    var avg = this.GetAverage(values);

    var squareDiffs = values.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });

    var avgSquareDiff = this.GetAverage(squareDiffs);

    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }

  GetAverage(data){
    var sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);

    var avg = sum / data.length;
    return avg;
  }
}
