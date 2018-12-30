import { NgAngularPage } from './app.po';

describe('ng-angular App', () => {
  let page: NgAngularPage;

  beforeEach(() => {
    page = new NgAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
