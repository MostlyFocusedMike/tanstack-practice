import Loading from '../util-components/Loading';
import ErrorMessage from '../util-components/ErrorMessage';
import BasicCharacterCard from '../BasicCharacterCard';
import styleUtils from '../../utils.module.css';
import styles from './styles.module.css';
import { useFeaturedCharacters } from '../../hooks/useFeaturedCharacters';

export default function FeaturedCharactersSection() {
  const { characters, isLoading, isError } = useFeaturedCharacters();

  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

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