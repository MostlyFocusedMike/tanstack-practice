import queryFn, { GET_FEATURED_CHARACTERS_KEY } from '../../api/getFeaturedCharacters';
import { useQuery } from '@tanstack/react-query';
import Loading from '../util-components/Loading';
import ErrorMessage from '../util-components/ErrorMessage';
import BasicCharacterCard from '../BasicCharacterCard';
import styleUtils from '../../utils.module.css';
import styles from './styles.module.css';

const queryOpts = { queryKey: [GET_FEATURED_CHARACTERS_KEY], queryFn };

export default function FeaturedCharactersSection() {
  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;

  return <section aria-labelledby='featured-header' className={styles.featuredCharacters}>
    <h2 id='featured-header'>Featured Characters</h2>
    <ul className={styleUtils.characterCardFlexList}>
      {
        characters.map((character) => (<li key={character._id}>
          <BasicCharacterCard { ...character} />
        </li>))
      }
    </ul>
  </section>
}