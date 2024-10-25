import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar";

export default function MainContainer() {
  return <>
    <HeaderBar />
    <main>
      <Outlet />
    </main>
    <footer>DISNEY BUT ON BOTTOM</footer>
  </>
}