import { CharacterType } from "../types";
import fetchHandler from "./fetchHandler";

export const GET_DEFAULT_CHARACTERS_KEY = 'get-default-characters';

export default async function getDefaultCharacters(): Promise<{characters: CharacterType[]}> {
  const { data } = await fetchHandler('https://api.disneyapi.dev/character?pageSize=8');
  return { characters: data };
}