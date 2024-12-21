import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for standalone components
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule

@Component({
  selector: 'app-deck',
  standalone: true, // Mark this component as standalone
  imports: [CommonModule, MatCardModule], // Import necessary modules here
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  cards = [
    { name: 'Card 1', description: 'This is the first card.' },
    { name: 'Card 2', description: 'This is the second card.' },
    { name: 'Card 3', description: 'This is the third card.' }
  ];
}
