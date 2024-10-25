import { CharacterType } from "../types";
import fetchHandler from "./fetchHandler";

export const GET_CHARACTER = 'character';

export default async function getCharacter(id: number): Promise<CharacterType> {
  const { data } = await fetchHandler(`https://api.disneyapi.dev/character/${id}`);
  return data;
}