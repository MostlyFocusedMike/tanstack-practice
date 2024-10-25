import { Link } from "react-router-dom";
import { mediaNamesFormatter } from "../utils";
import { CharacterType } from "../types";

export default function BasicCharacterCard(props: CharacterType) {
  const { _id, imageUrl, name, films} = props;
  const listOfFilms = mediaNamesFormatter(films);

  return <>
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>Featured Films</p>
    <p>{ listOfFilms.length ? listOfFilms : 'None yet!' }</p>
    <div><Link to={`/characters/${_id}`} aria-label={`View ${name}'s profile`}>View Profile</Link></div>
  </>
}