import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Subscribe } from 'app/model/subscribe.model';

@Injectable({
    providedIn: 'root'
  })  
export class FirebaseService {

    constructor(private db: AngularFireDatabase) {}

    subscribeRef: AngularFireList<any>;


    createSubscribe(subscribe: Subscribe){
        console.log(subscribe)
        this.subscribeRef = this.db.list('/subscribe');

        this.subscribeRef.push({
            firstName: subscribe.firstName,
            lastName: subscribe.lastName,
            email: subscribe.email,
            phoneNumber: subscribe.phoneNumber,
            streetName: subscribe.streetName,
            streetNumber: subscribe.streetNumber,
            postalcode: subscribe.postalcode,
            city: subscribe.city
        }).catch( error => {
            this.errorMgmt(error);
        });
    }
    // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
