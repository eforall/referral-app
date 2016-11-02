import { ReferralAppPage } from './app.po';

describe('referral-app App', function() {
  let page: ReferralAppPage;

  beforeEach(() => {
    page = new ReferralAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
