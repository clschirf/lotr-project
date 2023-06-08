import CharacterType, { RawApiCharacterType } from 'types/character';

export const transformCharacters = (list: RawApiCharacterType[]): CharacterType[] => {
    return list.map((c: RawApiCharacterType) => {
      return {
        id: c._id,
        height: c.height,
        race: c.race,
        gender: c.gender,
        birth: c.birth,
        spouse: c.spouse,
        death: c.death,
        realm: c.realm,
        hair: c.hair,
        characterName: c.name,
        wikiUrl: c.wikiUrl,
      };
    });
  }