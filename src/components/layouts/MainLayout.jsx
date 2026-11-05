import Header from "../header/Header";
import Footer from "../footer/Footer";

import { Outlet } from "react-router-dom";

import "./MainLayout.scss";

function MainLayout() {
  return (
    <>
      <a className="skipLink" href="#main-content">
        Saltar al contenido
      </a>

      <Header />

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
