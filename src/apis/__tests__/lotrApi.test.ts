import axios from 'axios';
import { fetchCharacters } from '../lotrApi';
import mockCharacterResponse from './mockCharacterResp.json';
import { getLotrApiToken } from '../../utils/authUtils';

jest.mock('axios');
jest.mock('../../utils/authUtils');

describe('lotr api', () => {
  describe('fetchCharacters', () => {
    const TEST_API_TOKEN = '23bdd088';

    beforeEach(() => {
      (axios.get as jest.Mock).mockResolvedValue({
        data: mockCharacterResponse,
      });
      (getLotrApiToken as jest.Mock).mockReturnValue(TEST_API_TOKEN);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should fetch all characters (no paging)', () => {
      fetchCharacters();
      expect(getLotrApiToken).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith('character', {
        baseURL: 'https://the-one-api.dev/v2',
        timeout: 5000,
        headers: { Authorization: `Bearer ${TEST_API_TOKEN}` },
      });
    });
  });
});
