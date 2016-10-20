import { MovieBarPage } from './app.po';

describe('movie-bar App', function() {
  let page: MovieBarPage;

  beforeEach(() => {
    page = new MovieBarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
