import { Link } from "react-router-dom";
import { mediaNamesFormatter } from "../../utils";
import { CharacterType } from "../../types";
import styles from './styles.module.css';

export default function BasicCharacterCard(props: CharacterType) {
  const { _id, imageUrl, name, films} = props;

  let listOfFilms = mediaNamesFormatter(films.slice(0,3));
  if (listOfFilms.length > 65) listOfFilms = listOfFilms.slice(0,50) + '...';

  return <div className={styles.basicCharacterCard}>
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p><b>Featured Films</b></p>
    <p className={styles.ellipsisBox}>{ listOfFilms.length ? listOfFilms : 'None yet!' }</p>
    <Link to={`/characters/${_id}`} aria-label={`View ${name}'s profile`}>View Profile</Link>
  </div>
}