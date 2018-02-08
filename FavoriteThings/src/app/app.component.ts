import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Favorite Things';
  favoriteColor: string = 'pink';
  favoriteNumber = 42;

constructor(db: AngularFireDatabase) {
  
}
  setColor(selectedColor: string): void{
    console.log("You selected the color " + selectedColor);
    this.favoriteColor = selectedColor;
  }

  updateColor(): void {
    console.log("TODO:Update the color");
  }

  setNumber(favoriteNumber: number): void {
    this.favoriteNumber = favoriteNumber;
  }
}
