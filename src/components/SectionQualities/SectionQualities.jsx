import React from "react";
import "./SectionQualities.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import WindPowerIcon from "@mui/icons-material/WindPower";

import PaletteIcon from "@mui/icons-material/Palette";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";

import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import ConstructionIcon from "@mui/icons-material/Construction";

const SectionQualities = () => {
  return (
    <div className="container-sectionQualities">
      <section>
        <div className="sectionQualities">
          <div className="sectionQualities-card">
            <div className="sectionQualities-card-icon">
              <ApartmentIcon className="card-icon" fontSize="large"></ApartmentIcon>
            </div>
            <div className="sectionQualities-card-titleContent">
              <div className="sectionQualities-card-title">
                <span>Mejor </span> <p>Arquitectura</p>
              </div>
              <div className="sectionQualities-card-content">
                <span>
                  Diseñamos espacios que combinan estética y funcionalidad, para
                  crear entornos que reflejen tus necesidades y estilo.
                </span>
              </div>
            </div>
          </div>

          <div className="sectionQualities-card">
            <div className="sectionQualities-card-icon">
              <WindPowerIcon className="card-icon" fontSize="large"></WindPowerIcon>
            </div>
            <div className="sectionQualities-card-titleContent">
              <div className="sectionQualities-card-title">
                <span>Eficiencia</span> <p>Energética</p>
              </div>
              <div className="sectionQualities-card-content">
                <span>
                  Nuestros proyectos se enfocan en soluciones sostenibles y
                  amigables con el medio ambiente, para reducir el impacto y
                  optimizar el consumo de energía.
                </span>
              </div>
            </div>
          </div>
          <div className="sectionQualities-card">
            <div className="sectionQualities-card-icon">
              <ImagesearchRollerIcon className="card-icon" fontSize="large"></ImagesearchRollerIcon>
            </div>

            <div className="sectionQualities-card-titleContent">
              <div className="sectionQualities-card-title">
                <span>Detalles</span> <p>de Diseño</p>
              </div>
              <div className="sectionQualities-card-content">
                <span>
                  Cuidamos cada detalle en el diseño, desde la selección de
                  materiales hasta la estética, para asegurarnos de que cada
                  proyecto sea una obra maestra visual y funcional.
                </span>
              </div>
            </div>
          </div>
          <div className="sectionQualities-card">
            <div className="sectionQualities-card-icon">
              <LocalShippingIcon className="card-icon" fontSize="large"></LocalShippingIcon>
            </div>
            <div className="sectionQualities-card-titleContent">
              <div className="sectionQualities-card-title">
                <span>Entrega</span> <p>Rápida</p>
              </div>
              <div className="sectionQualities-card-content">
                <span>
                  Nos comprometemos a entregar cada proyecto puntualmente y en
                  las mejores condiciones posibles, para que puedas disfrutar de
                  los resultados sin demora.
                </span>
              </div>
            </div>
          </div>
          <div className="sectionQualities-card">
            <div className="sectionQualities-card-icon">
              <HomeRepairServiceIcon className="card-icon" fontSize="large" ></HomeRepairServiceIcon>
            </div>
            <div className="sectionQualities-card-titleContent">
              <div className="sectionQualities-card-title">
                <span>Calidad </span> <p>Garantizada</p>
              </div>
              <div className="sectionQualities-card-content">
                <span>
                  Trabajamos con los más altos estándares de calidad en cada
                  etapa de la construcción, para asegurarnos de que cada
                  proyecto cumpla con tus expectativas y más.
                </span>
              </div>
            </div>
          </div>
          <div className="sectionQualities-card">
            <div className="sectionQualities-card-icon">
              <ConstructionIcon className="card-icon" fontSize="large"></ConstructionIcon>
            </div>
            <div className="sectionQualities-card-titleContent">
              <div className="sectionQualities-card-title">
                <span>Mantenimiento </span> <p>Experto</p>
              </div>
              <div className="sectionQualities-card-content">
                <span>
                  No solo construimos, sino que también brindamos servicios de
                  mantenimiento y reparación para asegurarnos de que tus
                  proyectos sigan luciendo y funcionando de manera óptima a lo
                  largo del tiempo.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionQualities;
