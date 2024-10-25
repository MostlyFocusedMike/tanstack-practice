import DisneyLogo from "../logos/DisneyLogo"
import styles from './styles.module.css';

export default function FooterBar() {
  return <footer className={styles.footerBar}>
    <DisneyLogo />
    <p>For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption</p>
  </footer>
}