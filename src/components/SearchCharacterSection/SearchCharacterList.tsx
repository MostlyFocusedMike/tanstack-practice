import { useQuery } from "@tanstack/react-query";
import queryFn from '../../api/getSearchedCharacters';
import Loading from "../util-components/Loading";
import ErrorMessage from "../util-components/ErrorMessage";
import BasicCharacterCard from "../BasicCharacterCard";
import styleUtils from '../../utils.module.css';

export default function SearchCharacterList({ queryKey }: { queryKey: string}) {
  const queryOpts = { queryKey: [queryKey], queryFn: () => queryFn(queryKey) }

  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;

  return <ul className={`${styleUtils.characterCardFlexList} ${styleUtils.flexStart}`}>
    {
      characters.map((character) => (<li key={character._id}>
        <BasicCharacterCard { ...character} />
      </li>))
    }
  </ul>
}