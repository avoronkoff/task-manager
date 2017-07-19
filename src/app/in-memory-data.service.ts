import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const lists = [
      {
        id: 0,
        listName: 'ToDo',
        cards: [
          {
            id: 0,
            description: 'learn AngularJS'
          }
        ]
      },
      {
        id: 1,
        listName: 'Doing',
        cards: [
          {
            id: 0,
            description: 'learn ReactJS'
          }
        ]
      },
      {
        id: 2,
        listName: 'Done',
        cards: [
          {
            id: 0,
            description: 'learn VueJS',
          }
        ]
      }
    ];
    return {lists};
  }
}
