import CharacterList from '../components/CharacterList';
import FeaturedCharactersList from '../components/FeaturedCharactersList';

export default function HomePage() {
  return <div>
    <h1>Home page</h1>
    <CharacterList />
    <FeaturedCharactersList />
  </div>
}