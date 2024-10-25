import { useQuery } from "@tanstack/react-query";
import queryFn from '../api/getSearchedCharacters';
import Loading from "./util-components/Loading";
import ErrorMessage from "./util-components/ErrorMessage";
import BasicCharacterCard from "./BasicCharacterCard";

export default function SearchCharacterList({ queryKey }: { queryKey: string}) {
  const queryOpts = { queryKey: [queryKey], queryFn: () => queryFn(queryKey) }

  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;

  return <ul>
    {
      characters.map((character) => (<li key={character._id}>
        <BasicCharacterCard { ...character} />
      </li>))
    }
  </ul>
}