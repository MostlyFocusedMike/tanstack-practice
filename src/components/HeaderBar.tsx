import { Link } from "react-router-dom"
import SearchForm from "./SearchForm";
import DisneyLogo from "./util-components/DisneyLogo";
import UserLogo from "./util-components/UserLogo";

export default function NavBar() {
  return (
    <header>
      <Link to="/"><DisneyLogo /></Link>
      <SearchForm />
      <Link to="/profile"><UserLogo /></Link>
    </header>
  );
}