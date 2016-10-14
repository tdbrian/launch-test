import { LaunchTestPage } from './app.po';

describe('launch-test App', function() {
  let page: LaunchTestPage;

  beforeEach(() => {
    page = new LaunchTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
