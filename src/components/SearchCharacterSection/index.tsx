import { Navigate, useSearchParams } from "react-router-dom"
import SearchCharacterList from "./SearchCharacterList";
import styles from './styles.module.css';

export default function SearchCharacterSection() {
  const [searchParams] = useSearchParams();

  const queryKey = searchParams.get('name');
  if (!queryKey) return <Navigate to='/' />

  return <section aria-labelledby='search-header'>
    <h1 id='search-header' className={styles.heading}>Search Results - {queryKey}</h1>
    <SearchCharacterList queryKey={queryKey} />
  </section>
}