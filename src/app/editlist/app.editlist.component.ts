import {Component, Input} from '@angular/core';
import {Lists} from '../lists';
import {ListsService} from '../app.lists.service';
import {Card} from '../card';

@Component({
  selector: 'app-editlist',
  templateUrl: './app.editlist.component.html',
  styleUrls: ['./app.editlist.component.css'],
  providers: [ListsService]
})
export class EditlistComponent {
  @Input() card: Card;
  @Input() id: number;
  @Input() lists: Lists;
  editing = false;

  constructor(private listsService: ListsService) { }

  deleteCard(cardId: number, listId: number): void {
    this.listsService.deleteCard(cardId, listId)
      .then(() => {
        this.lists[listId].cards.splice(cardId, 1);
      });
  }

  updateCard(card: Card, id: number): void {
    this.listsService.updateCard(card, id)
      .then(cards => {
        this.lists[id].cards[cards.id] = cards;
      });
    this.editing = false;
  }
}
