import { SongcatalogPage } from './app.po';

describe('songcatalog App', () => {
  let page: SongcatalogPage;

  beforeEach(() => {
    page = new SongcatalogPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
