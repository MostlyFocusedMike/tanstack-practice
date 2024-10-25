import { Navigate, useSearchParams } from "react-router-dom"
import SearchCharacterList from "./SearchCharacterList";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const queryKey = searchParams.get('name');
  if (!queryKey) return <Navigate to='/' />

  return <section aria-labelledby='search-header'>
    <h1 id='search-header'>Search Results</h1>
    <SearchCharacterList queryKey={queryKey} />
  </section>
}