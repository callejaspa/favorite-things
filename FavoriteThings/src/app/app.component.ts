import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnDestroy, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy{
  title  = 'Favorite Things';
  favoriteColor = 'pink';
  favoriteNumber = 42;

constructor(db: AngularFireDatabase) {

}

  ngOnInit(): void {
    firebase.database().ref().child('color').on('value', 
    (snapshot: firebase.database.DataSnapshot) => {
      this.favoriteColor = snapshot.val();
    });

    firebase.database().ref().child('number').on('value',
    (snapshot: firebase.database.DataSnapshot) => {
      this.favoriteNumber = snapshot.val();
    });

  }
  
  ngOnDestroy(): void {
   firebase.database().ref().child('color').off();
   firebase.database().ref().child('number').off();
  }
  
  setColor(selectedColor: string): void{
    firebase.database().ref().child('color').set(selectedColor);
  }

  setNumber(favoriteNumber: number): void {
    firebase.database().ref().child('number').set(favoriteNumber);
  }
}
