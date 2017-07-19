import { TasksManagerPage } from './app.po';

describe('tasks-manager App', () => {
  let page: TasksManagerPage;

  beforeEach(() => {
    page = new TasksManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
