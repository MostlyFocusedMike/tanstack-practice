import queryFn, { GET_FEATURED_CHARACTERS_KEY } from '../api/getFeaturedCharacters';
import { useQuery } from '@tanstack/react-query';
import Loading from './util-components/Loading';
import ErrorMessage from './util-components/ErrorMessage';
import { Link } from 'react-router-dom';
import { mediaNamesFormatter } from '../utils';
import BasicCharacterCard from './BasicCharacterCard';

const queryOpts = { queryKey: [GET_FEATURED_CHARACTERS_KEY], queryFn }

export default function FeaturedCharactersList() {
  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;

  return <section aria-labelledby='featured-header'>
    <h2 id='featured-header'>Featured Characters</h2>
    <ul style={{ display: 'flex' }}>
      {
        characters.map((character) => (<li key={character._id}>
          <BasicCharacterCard { ...character} />
        </li>))
      }
    </ul>
  </section>
}