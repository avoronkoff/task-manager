import {Component, Input} from '@angular/core';
import {ListsService} from '../app.lists.service';

import { Lists } from '../lists';

@Component({
  selector: 'app-add-card',
  templateUrl: './app.add-card.component.html',
  styleUrls: ['./app.add-card.component.css'],
  providers: [ListsService]
})
export class AddCardComponent {
  @Input() id: number;
  @Input() lists: Lists;
  newCard = '';

  constructor(private listsService: ListsService) { }

  addCard(card: string, id: number): void {
    const newCard = {
      id: this.lists[id].cards.length,
      description: card
    };
    this.listsService.addCard(newCard, id)
      .then(cards => {
        this.lists[id].cards.push(cards);
      });

    this.newCard = '';
  }
}
