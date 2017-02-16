import { CssDemoV2Page } from './app.po';

describe('css-demo-v2 App', function() {
  let page: CssDemoV2Page;

  beforeEach(() => {
    page = new CssDemoV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
