import axios, { AxiosRequestConfig } from 'axios';
import { getLotrApiToken } from '../utils/authUtils';
import { RawApiCharacterType } from 'types/character';

const API_BASE = 'https://the-one-api.dev/v2';
const CHARACTER_ENDPOINT = 'character';

export type CharacterResponseType = {
  data: { docs: Array<RawApiCharacterType> };
};

const getConfig = (): AxiosRequestConfig => {
  const token = getLotrApiToken();
  return {
    baseURL: API_BASE,
    timeout: 5000,
    headers: { Authorization: `Bearer ${token}` },
  };
};

export const fetchCharacters = async () => {
  const promise = axios.get(CHARACTER_ENDPOINT, getConfig());
  const resp = await promise;
  return resp;
};
