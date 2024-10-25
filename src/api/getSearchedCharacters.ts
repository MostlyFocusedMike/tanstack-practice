import { CharacterType } from "../types";
import fetchHandler from "./fetchHandler";

export default async function getSearchedCharacters(nameParam: string): Promise<{characters: CharacterType[]}> {
  const { data } = await fetchHandler(`https://api.disneyapi.dev/character?name=${nameParam}`);
  // todo type properly
  data.sort((a: CharacterType, b: CharacterType) => b.films.length - a.films.length);
  return { characters: data };
}
