import Loading from '../util-components/Loading'
import ErrorMessage from '../util-components/ErrorMessage';
import BasicCharacterCard from '../BasicCharacterCard';
import styleUtils from '../../utils.module.css';
import useDefaultCharacters from '../../hooks/useDefaultCharacters';

export default function DefaultCharacterSection() {
  const { data, isLoading, isError } = useDefaultCharacters();
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