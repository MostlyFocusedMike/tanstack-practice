import { useParams } from "react-router-dom";
import DetailedCharacterCard from "../components/DetailedCharacterCard";
import FeaturedCharactersList from "../components/FeaturedCharacterSection";

export default function CharacterPage() {
  const { characterId } = useParams();

  if (!characterId) return null;

  return <>
    <DetailedCharacterCard characterId={Number(characterId)} />
    <FeaturedCharactersList />
  </>
}