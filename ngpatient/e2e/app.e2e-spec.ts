import { NgpatientPage } from './app.po';

describe('ngpatient App', () => {
  let page: NgpatientPage;

  beforeEach(() => {
    page = new NgpatientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
