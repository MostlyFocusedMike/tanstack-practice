import { CharacterType } from "../types";
import fetchHandler from "./fetchHandler";

export const GET_DEFAULT_CHARACTERS_KEY = 'get-default-characters';

export default async function getDefaultCharacters(): Promise<{characters: CharacterType[]}> {
  const { data } = await fetchHandler('https://api.disneyapi.dev/character?films=Frozen&pageSize=8');
  data.sort((a: CharacterType, b: CharacterType) => b.films.length - a.films.length);
  return { characters: data };
}