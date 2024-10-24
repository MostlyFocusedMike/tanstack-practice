import { Link } from "react-router-dom";
import { mediaNamesFormatter } from "../utils";
import { CharacterType } from "../types";

export default function BasicCharacterCard(props: CharacterType) {
  const { _id, imageUrl, name, films} = props;
  const listOfFilms = mediaNamesFormatter(films);

  return <>
    <img src={imageUrl} alt={name} />
    <h2>{name}</h2>
    <p>Featured Films</p>
    <p>{ listOfFilms.length ? listOfFilms : 'None yet!' }</p>
    <div><Link to={`characters/${_id}`}>View Profile</Link></div>
  </>
}