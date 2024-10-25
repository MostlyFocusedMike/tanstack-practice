import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../components/util-components/ErrorMessage";
import Loading from "../components/util-components/Loading";
import queryFn from '../api/getCharacter';
import { formatDate } from "../utils";

type DetailCardPropsType = {
  characterId: number;
}
export default function DetailedCharacterCard(props: DetailCardPropsType) {
  const { characterId } = props;
  const queryOpts = { queryKey: [characterId], queryFn: () => queryFn(characterId) };

  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { name, imageUrl, sourceUrl, films, tvShows, shortFilms, updatedAt } = data;
  return <section aria-label={`${name}'s Character Details`}>
    <img src={imageUrl} alt={name} />
    <div>
      <h1>{name}</h1>
      <p>Last Updated {formatDate(updatedAt)}</p>
      <div>
        <h2>Featured Films</h2>
        <ul>
          { films.slice(0, 4).map(name => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <div>
        <h2>Short Films</h2>
        <ul>
          { shortFilms.slice(0,4).map(name => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <div>
        <h2>TV Shows</h2>
        <ul>
          { tvShows.slice(0, 4).map(name => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Find more information about ${name}`}
      >
        Explore More Character Details
      </a>
    </div>
  </section>
}