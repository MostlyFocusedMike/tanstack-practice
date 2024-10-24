import { Outlet } from "react-router-dom";

export default function MainContainer() {
  return <>
    <header>DISNEY</header>
    <main>
      <Outlet />
    </main>
    <footer>DISNEY BUT ON BOTTOM</footer>
  </>
}