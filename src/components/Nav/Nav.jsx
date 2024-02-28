import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";

import "./Nav.css";
import logo from "../../imgs/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setHideSlice } from "../../store/slice/hideItems.slice";

const Nav = () => {
  const [eventHamburger, setEventHamburger] = useState(false);

  const hideItems = useSelector((store) => store.hideItemsSlice);
  const dispatch = useDispatch();

  console.log("changes hideItems ", hideItems);

  const handleHamburger = () => {
    setEventHamburger(!eventHamburger);
    console.log(eventHamburger);
    dispatch(setHideSlice(!hideItems));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "start", // Comienza el desplazamiento desde la parte superior de la sección
      });
    }
  };

  return (
    <div className="container-nav">
      <div className="container-nav-logoName-icon">
        <div className="nav-logo-name">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <span>
            ICEBERG TRAINING <b>PERU</b> E.I.R.L
          </span>
        </div>

        <div
          className={`nav-iconHamburger ${eventHamburger ? "hideIcon" : ""}`}
        >
          <button onClick={handleHamburger}>
            <MenuOpenIcon className="menu-icon" />
          </button>
        </div>
        <div className="nav-container-pc">
          <ul className="nav-container-pc-ul">
            <li>
              <a href="#" onClick={() => scrollToSection("Inicio")}>INICIO</a>{" "}
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("About")}>NOSOTROS</a>{" "}
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("Gallery")}>GALERIA</a>{" "}
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("Services")}>SERVICIOS</a>{" "}
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("Team")}>EQUIPO</a>{" "}
            </li>
            <li>
              <a href="#" onClick={() => scrollToSection("Contact")}>CONTACTO</a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`nav-container-hamburger ${eventHamburger ? "show" : ""} `}
      >
        <button onClick={handleHamburger}>
          <CloseIcon className="closed-icon" fontSize="large"></CloseIcon>
        </button>
        <ul className="nav-container-hamburger-ul">
          <li>
            <a href="#" onClick={() => scrollToSection("Inicio")}>INICIO</a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("About")}>NOSOTROS</a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("Gallery")}>GALERIA</a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("Services")}>SERVICIOS</a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("Team")}>EQUIPO</a>{" "}
          </li>
          <li>
            <a href="#" onClick={() => scrollToSection("Contact")}>CONTACTO</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
