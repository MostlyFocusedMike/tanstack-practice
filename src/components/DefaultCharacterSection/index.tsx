import queryFn, { GET_DEFAULT_CHARACTERS_KEY } from '../../api/getDefaultCharacters';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../util-components/Loading'
import ErrorMessage from '../util-components/ErrorMessage';
import BasicCharacterCard from '../BasicCharacterCard';
import styleUtils from '../../utils.module.css';
import { GET_CHARACTER } from '../../api/getCharacter';
import { CharacterType } from '../../types';

export default function DefaultCharacterSection() {
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

  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage />;

  const { characters } = data;
  return <section aria-label="Default Characters">
    <ul className={`${styleUtils.characterCardFlexList} ${styleUtils.mt4}`}>
      {
        characters.map((character) => (<li key={character._id}>
          <BasicCharacterCard { ...character} />
        </li>))
      }
    </ul>
  </section>
}