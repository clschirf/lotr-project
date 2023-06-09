export enum Race {
  HUMAN = 'Human',
}

export enum Gender {
  FM = 'Female',
  M = 'Male',
}

export type RawApiCharacterType = {
  _id: string;
  height?: string;
  race: string;
  gender: string;
  birth?: string;
  spouse?: string;
  death?: string;
  realm?: string;
  hair?: string;
  name: string;
  wikiUrl: string;
};

type CharacterType = {
  id: string;
  height?: string;
  // race: keyof Race;
  // gender: keyof Gender;
  race: string;
  gender: string;
  birth?: string;
  spouse?: string;
  death?: string;
  realm?: string; // TODO: turn this into an enum
  hair?: string;
  characterName: string;
  wikiUrl?: string;
};

export default CharacterType;
