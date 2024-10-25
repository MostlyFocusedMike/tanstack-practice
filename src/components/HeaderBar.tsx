import { Link } from "react-router-dom"
import SearchForm from "./SearchForm";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link to="/">DISNEY</Link>
        <Link to="/profile">User Profile</Link>
      </nav>
      <SearchForm />
    </header>
  );
}