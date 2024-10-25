import queryFn from '../api/getSearchedCharacters';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CharacterType } from '../types';
import { GET_CHARACTER } from '../api/getCharacter';

export default function useSearchCharacter(queryKey: string) {
  const queryClient = useQueryClient();

  const queryOpts = {
    queryKey: [queryKey],
    queryFn: () => queryFn(queryKey),
    onSuccess: (data: { characters: CharacterType[] }) => {
      data.characters.forEach((character) => {
        queryClient.setQueryData(
          [GET_CHARACTER, character._id],
          character
        );
      });
    }
  };

  return useQuery(queryOpts);
}