import React from "react";
import "./SectionFooter.css";
import divider from "./../../imgs/bar.png";
import logo from "./../../imgs/logo-new.png";
const SectionFooter = () => {
  return (
    <div className="container-sectionFooter">
      <div className="sectionContact-divider">
        <img src={divider} alt="img-divider" />
      </div>
      <section>
        <div className="sectionFooter">

          <div className="sectionFooter-reserv">
            <p>© 2024 todos los derechos reservados</p>
            <div className="sectionFooter-reserv-content">
            <div className="sectionFooter-reserv-img-text">
              <img src={logo} alt="logo-empresa" width={20} />
            </div>
            <span>ICEBERG TRAINING PERU E.I.R.L</span>
            </div>
           
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=100092137910740"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <span>Desarrollado por : Dev Web</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SectionFooter;
