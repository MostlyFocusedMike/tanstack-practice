import { Outlet, ScrollRestoration } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

export default function MainContainer() {
  return <>
    <HeaderBar />
    <main>
      <Outlet />
      <ScrollRestoration />
    </main>
    <FooterBar />
  </>;
}