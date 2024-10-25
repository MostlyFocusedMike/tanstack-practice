import { Link } from "react-router-dom"
import DisneyLogo from "./logos/DisneyLogo";
import UserLogo from "./logos/UserLogo";
import SearchForm from "./SearchForm";

export default function NavBar() {
  return (
    <header>
      <Link to="/"><DisneyLogo /></Link>
      <SearchForm />
      <Link to="/profile"><UserLogo /></Link>
    </header>
  );
}