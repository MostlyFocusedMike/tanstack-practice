import Loading from "../util-components/Loading";
import ErrorMessage from "../util-components/ErrorMessage";
import BasicCharacterCard from "../BasicCharacterCard";
import styleUtils from '../../utils.module.css';
import useSearchCharacter from '../../hooks/useSearchCharacters';

export default function SearchCharacterList({ queryKey }: { queryKey: string}) {
  const { data, isLoading, isError } = useSearchCharacter(queryKey);
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