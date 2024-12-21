import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule here
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DeckComponent } from "./deck/deck.component"; // Import ToolbarComponent


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ToolbarComponent]
})
export class AppComponent {
  title = 'Card Deck';
  deck = [];

  suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

  constructor() {
    this.generateDeck();
  }

  generateDeck() {
    this.deck = [];
    this.suits.forEach((suit) => {
      this.ranks.forEach((rank) => {
        return this.deck.push();
      });
    });
  }
}
