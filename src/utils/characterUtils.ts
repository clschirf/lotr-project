import DWARF_ICON from 'assets/dwarf.svg';
import ELF_ICON from 'assets/elf.svg';
import HUMAN_ICON from 'assets/footman.svg';
import HOBBIT_ICON from 'assets/hobbit-door.svg';
import MAIAR_ICON from 'assets/maiar.svg';
import DRAGON_ICON from 'assets/dragon.svg';
import UNKNOWN_ICON from 'assets/question-circle.svg';

import {
  elf,
  human,
  dwarf,
  maiar,
  ainur,
  dragons,
  spiders,
  orc,
  ent,
  wraith,
} from 'library/palette';

import CharacterType, { RawApiCharacterType } from 'types/character';

export enum RACES {
  DWARF = 'dwarf',
  ELF = 'elf',
  HOBBIT = 'hobbit',
  HUMAN = 'human',
  MEN = 'men',
  MAIAR = 'maiar',
  DRAGON = 'dragons',
  AINUR = 'ainur',
  SPIDERS = 'great spiders',
  WRAITH = 'wraiths',
  ENT = 'ent',
  ORC = 'orcs',
}

export const transformCharacters = (
  list: RawApiCharacterType[],
): CharacterType[] => {
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
};

export type RaceStyleType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color: string;
};

export const getRaceStyling = (race: string): RaceStyleType => {
  const normalisedRace = race.toLowerCase();

  switch (normalisedRace) {
    case RACES.HUMAN:
    case RACES.MEN:
      return {
        icon: HUMAN_ICON,
        color: human,
      };
    case RACES.ELF:
      return {
        icon: ELF_ICON,
        color: elf,
      };
    case RACES.DWARF:
      return {
        icon: DWARF_ICON,
        color: dwarf,
      };
    case RACES.DRAGON:
      return {
        icon: DRAGON_ICON,
        color: dragons,
      };
    case RACES.MAIAR:
      return {
        icon: MAIAR_ICON,
        color: maiar,
      };
    case RACES.ENT:
      return {
        icon: UNKNOWN_ICON,
        color: ent,
      };
    case RACES.WRAITH:
      return {
        icon: UNKNOWN_ICON,
        color: wraith,
      };
    case RACES.SPIDERS:
      return {
        icon: UNKNOWN_ICON,
        color: spiders,
      };
    case RACES.ORC:
      return {
        icon: UNKNOWN_ICON,
        color: orc,
      };
    case RACES.AINUR:
      return {
        icon: UNKNOWN_ICON,
        color: ainur,
      };
  }

  return {
    icon: UNKNOWN_ICON,
    color: '#ffffff',
  };
};
