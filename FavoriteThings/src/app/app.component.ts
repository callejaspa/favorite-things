import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';

import * as firebase from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Favorite Things';
  favoriteColor: string = 'pink';
  favoriteNumber = 42;

constructor(db: AngularFirestoreModule) {

}
  setColor(selectedColor: string): void{
    var database = firebase.database().ref().child("color").set(selectedColor);
  }

  updateColor(): void {
    console.log("TODO:Update the color");
  }

  setNumber(favoriteNumber: number): void {
    this.favoriteNumber = favoriteNumber;
  }
}
