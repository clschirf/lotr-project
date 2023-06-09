import { getLotrApiToken } from '../authUtils';

xdescribe('authUtils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getLotrApiToken', () => {
    fit('should grab the token from local storage', () => {
      const mockedGetItem = jest.fn();
    //   window.localStorage.getItem = mockedGetItem;
      Object.defineProperty(window, 'localStorage.getItem', mockedGetItem)

      getLotrApiToken();

      expect(mockedGetItem).toHaveBeenCalledTimes(1);
    });
  });
});
