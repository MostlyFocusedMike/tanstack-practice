import queryFn, { GET_DEFAULT_CHARACTERS_KEY } from '../api/getDefaultCharacters';
import { useQuery } from '@tanstack/react-query';
import Loading from './util-components/Loading'
import ErrorMessage from './util-components/ErrorMessage';
import BasicCharacterCard from './BasicCharacterCard';

const queryOpts = { queryKey: [GET_DEFAULT_CHARACTERS_KEY], queryFn };

export default function CharacterList() {
  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;
  return <section aria-label='Default Characters'>
    <ul style={{ display: 'flex', flexWrap: 'wrap'}}>
      {
        characters.map((character) => (<li key={character._id}>
          <BasicCharacterCard { ...character} />
        </li>))
      }
    </ul>
  </section>
}