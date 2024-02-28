import React from "react";
import "./SectionServices.css";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import RestoreIcon from "@mui/icons-material/Restore";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const SectionServices = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div className="container-sectionServices" >
      <section>
        <div className="sectionServices-services">
          <div className="services-card">
            <CurrencyExchangeIcon
              className="services-icon"
              sx={{ fontSize: "70px" }}
            ></CurrencyExchangeIcon>
            <div className="services-card-title">
              <h2>Precio</h2>
              <p> justo </p>
            </div>

            <span>
              Entendemos la importancia de un presupuesto equitativo en tu
              proyecto. Ofrecemos tarifas competitivas para que obtengas el
              máximo valor por tu inversión.
            </span>
            <div className="services-card-link"   onClick={() => scrollToSection("Contact")}>
              <a>Mas información</a>
              <ArrowRightAltIcon className="services-card-icon-arrow"></ArrowRightAltIcon>
            </div>
          </div>

          <div className="services-card two-card">
            <PrivacyTipIcon
              className="services-icon"
              sx={{ fontSize: "70px" }}
            ></PrivacyTipIcon>
            <div className="services-card-title">
              <h2>Soporte</h2>
              <p> 24/ 7 </p>
            </div>

            <span>
              Nuestro equipo de expertos está disponible en cualquier momento
              para responder a tus preguntas y brindarte el apoyo necesario
              durante todo el proceso de construcción.
            </span>
            <div className="services-card-link"  onClick={() => scrollToSection("Contact")}>
              <a>Mas información</a>
              <ArrowRightAltIcon className="services-card-icon-arrow"></ArrowRightAltIcon>
            </div>
          </div>
          <div className="services-card">
            <RestoreIcon
              sx={{ fontSize: "70px" }}
              className="services-icon"
            ></RestoreIcon>
            <div className="services-card-title">
              <h2>Entrega</h2>
              <p> Rápida </p>
            </div>

            <span>
              Sabemos que el tiempo es esencial en la construcción. Nos
              comprometemos a entregar tus proyectos en plazo y en las mejores
              condiciones posibles.
            </span>
            <div className="services-card-link"  onClick={() => scrollToSection("Contact")}>
              <a >Mas información</a>
              <ArrowRightAltIcon className="services-card-icon-arrow"></ArrowRightAltIcon>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionServices;
