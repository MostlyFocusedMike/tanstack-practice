import queryFn, { GET_DEFAULT_CHARACTERS_KEY } from '../api/getDefaultCharacters';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { Link } from 'react-router-dom';
import { mediaNameFormatter } from '../utils';

const queryOpts = { queryKey: [GET_DEFAULT_CHARACTERS_KEY], queryFn }

export default function CharacterList() {
  const { data, isLoading, isError } = useQuery(queryOpts);
  if (isLoading) return <Loading />
  if (isError) return <ErrorMessage />

  const { characters } = data;
  return <ul>
    {
      characters.map(({ _id, imageUrl, name, films}) => {
        const listOfFilms = mediaNameFormatter(films);

        return <li key={_id}>
          <img src={imageUrl} alt={name} />
          <h2>{name}</h2>
          <p>Featured Films</p>
          <p>{ listOfFilms.length ? listOfFilms : 'None yet!' }</p>
          <div><Link to={`characters/${_id}`}>View Profile</Link></div>
        </li>
      })
    }
  </ul>
}