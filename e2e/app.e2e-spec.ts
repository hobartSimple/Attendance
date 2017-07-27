import { AttendancePage } from './app.po';

describe('attendance App', () => {
  let page: AttendancePage;

  beforeEach(() => {
    page = new AttendancePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
