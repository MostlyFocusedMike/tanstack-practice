import { Link } from "react-router-dom"
import DisneyLogo from "../logos/DisneyLogo";
import UserLogo from "../logos/UserLogo";
import SearchForm from "../SearchForm";
import styles from './styles.module.css';

export default function NavBar() {
  return (
    <header className={styles.headerBar}>
      <Link to="/"><DisneyLogo /></Link>
      <SearchForm />
      <Link to="/profile"><UserLogo /></Link>
    </header>
  );
}