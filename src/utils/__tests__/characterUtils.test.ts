import { getRaceStyling } from 'utils/characterUtils';
import { dwarf } from 'library/palette';

describe('CharacterUtils', () => {
  describe('getRaceStyling', () => {
    it('should return default values when no race info is found', () => {
      const styling = getRaceStyling('does not exist');
      expect(styling.color).toEqual('#ffffff');
    });

    it('should return the correct values when race info is found', () => {
      const styling = getRaceStyling('dwarf');
      expect(styling.color).toEqual(dwarf);
    });
  });
});
