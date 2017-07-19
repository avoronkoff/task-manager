import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Lists } from './lists';
import { Card } from './card';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListsService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private listsUrl = 'api/lists';
  constructor(private http: Http) { }

  getLists(): Promise<Lists[]> {
    return this.http.get(this.listsUrl)
      .toPromise()
      .then(response => response.json().data as Lists[])
      .catch(this.handleError);
  }

  addLists(NewLists: object): Promise<Lists> {
    return this.http
      .post(this.listsUrl, JSON.stringify({NewLists: NewLists}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data.NewLists as Lists)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${'api/lists'}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  deleteCard(cardId: number, listId: number): Promise<void> {
    const url = `${'api/lists'}.${listId}.${'cards'}/${cardId}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  addCard(card: object, id: number): Promise<Card> {
    const url = `${'api/lists'}.${id}.${'cards'}`;
    return this.http
      .post(url, JSON.stringify({cards: card}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data.cards as Card)
      .catch(this.handleError);
  }

  updateCard(card: Card, id: number): Promise<Card> {
    const url = `${'api/lists'}.${id}.${'cards'}.${card.id}`;
    return this.http
      .post(url, JSON.stringify({card: card}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data.card as Card)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
