import queryFn from '../../api/getSearchedCharacters';
import Loading from "../util-components/Loading";
import ErrorMessage from "../util-components/ErrorMessage";
import BasicCharacterCard from "../BasicCharacterCard";
import styleUtils from '../../utils.module.css';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { CharacterType } from '../../types';
import { GET_CHARACTER } from '../../api/getCharacter';

export default function SearchCharacterList({ queryKey }: { queryKey: string}) {
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

  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;

  return <ul className={`${styleUtils.characterCardFlexList} ${styleUtils.flexStart}`}>
    {
      characters.map((character) => (
        <li key={character._id}>
          <BasicCharacterCard {...character} />
        </li>
      ))
    }
  </ul>
}