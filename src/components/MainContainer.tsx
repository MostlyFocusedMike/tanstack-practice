import { Link, Outlet } from "react-router-dom";

export default function MainContainer() {
  return <>
    <header>
      <Link to="/">DISNEY</Link>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>DISNEY BUT ON BOTTOM</footer>
  </>
}