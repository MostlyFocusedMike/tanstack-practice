import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import DisneyLogo from "./util-components/DisneyLogo";

export default function MainContainer() {
  return <>
    <HeaderBar />
    <main>
      <Outlet />
    </main>
    <footer>
      <DisneyLogo />
      <p>For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption</p>
    </footer>
  </>

}