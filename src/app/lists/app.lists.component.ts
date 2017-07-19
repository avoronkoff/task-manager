import {Component, OnInit} from '@angular/core';

import { Lists } from '../lists';
import { ListsService } from '../app.lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './app.lists.component.html',
  styleUrls: ['./app.lists.component.css'],
  providers: [ListsService]
})
export class ListsComponent implements OnInit {
  dragOperation = false;
  newList = '';
  lists: any[] = [];
  constructor(private listsService: ListsService) { }

  getLists(): void {
    this.listsService
      .getLists()
      .then(lists => this.lists = lists);
  }

  addLists(list: string): void {
    if (!list) { return; }
     const newLists = {
      id: this.lists.length,
      listName: list.trim(),
      cards: []
    };
    this.listsService.addLists(newLists)
      .then(lists => {
        this.lists.push(lists);
      });

    this.newList = '';
  }

  delete(list: Lists): void {
    this.listsService
      .delete(list.id)
      .then(() => {
        this.lists = this.lists.filter(h => h !== list);
      });
  }

  ngOnInit(): void {
    this.getLists();
  }
}

