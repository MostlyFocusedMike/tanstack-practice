import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GET_CHARACTER } from "../api/getCharacter";
import queryFn, { GET_DEFAULT_CHARACTERS_KEY } from "../api/getDefaultCharacters";
import { CharacterType } from "../types";

export default function useDefaultCharacters() {
  const queryClient = useQueryClient();

  const queryOpts = {
    queryKey: [GET_DEFAULT_CHARACTERS_KEY],
    queryFn,
    onSuccess: (data: { characters: CharacterType[] }) => {
      data.characters.forEach((character) => {
        queryClient.setQueryData(
          [GET_CHARACTER, character._id],
          character
        );
      });
    }
  };

  return useQuery(queryOpts)
}