import { RpaWorkbenchPage } from './app.po';

describe('rpa-workbench App', () => {
  let page: RpaWorkbenchPage;

  beforeEach(() => {
    page = new RpaWorkbenchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
