import { CharacterType } from "../types";
import fetchHandler from "./fetchHandler";

const [belle, beast, mickey, donald] = [571, 544, 4703, 1947];

export const GET_FEATURED_CHARACTERS_KEY = 'get-featured-characters';

export default async function getFeaturedCharacters(): Promise<{characters: CharacterType[]}> {
  const featuredIds = [belle, beast, mickey, donald];

  const promises = featuredIds.map(id => fetchHandler(`https://api.disneyapi.dev/character/${id}`))
  const rawCharactersData = await Promise.all(promises)

  return { characters: rawCharactersData.map(({ data }) => ({ ...data })) };
}
