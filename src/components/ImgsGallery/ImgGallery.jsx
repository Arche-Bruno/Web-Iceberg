import React, { useRef, useEffect, useState } from "react";
import mixitup from "mixitup";
import "./ImgGallery.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import team from "./../../imgs/img-reunion/todos-new.png";

import activities1 from "./../../imgs/img-reunion/actividad1-new.png";
import activitiesT from "./../../imgs/img-reunion/actividad1-newT.png";
import activities2 from "./../../imgs/img-reunion/actividad2.jpeg";
import activities3 from "./../../imgs/img-reunion/actividad3.jpeg";
import activities4 from "./../../imgs/img-reunion/actividad4-new.png";

import informativeTalk1 from "./../../imgs/img-reunion/charla1-new.png";
import informativeTalk2 from "./../../imgs/img-reunion/charla2-new.png";
import informativeTalk3 from "./../../imgs/img-reunion/charla3.jpeg";

import Simulacrum1 from "./../../imgs/img-reunion/simulacro1-new.png";

import Simulacrum2 from "./../../imgs/img-reunion/simulacro2-new.png";

import Simulacrum3 from "./../../imgs/img-reunion/simulacro3.jpg";
import SliderImgsGallery from "./SliderImgsGallery";

const ImgGallery = () => {
  const containerImgs = useRef(null);

  useEffect(() => {
    let mixer = mixitup(containerImgs.current);
    return () => {
      mixer.destroy(); // Destruye la instancia de mixitup al desmontar el componente
    };
  }, []);
  const Team = [
    {
      original: team,
      author: "@bkristastucchio",
      thumbnail: team,
      title: "Equipo",
      featured: true,
    },
  ];
  const Activities = [
    {
      original: activities1,
      thumbnail: activities1,
      title: "Actividades",
    },
    {
      original: activities2,
      thumbnail: activities2,
      title: "Actividades",
    },
    {
      original: activities3,
      title: "Actividades",
      thumbnail: activities3,
    },
    {
      original: activities4,
      title: "Actividades",
      thumbnail: activities4,
    },
  ];

  const InformativeTalk = [
    {
      original: informativeTalk1,
      title: "Charla Informativa",
      featured: true,
      thumbnail: informativeTalk1,
    },
    {
      original: informativeTalk2,
      title: "Charla Informativa",
      thumbnail: informativeTalk2,
    },

    {
      original: informativeTalk3,
      title: "Charla Informativa",
      thumbnail: informativeTalk3,
    },
  ];
  const Simulacrum = [
    {
      original: Simulacrum2,
      thumbnail: Simulacrum2,
      title: "Simulacro",
      featured: true,
    },
    {
      original: Simulacrum1,
      thumbnail: Simulacrum1,
      title: "Simulacro",
    },
    {
      original: Simulacrum3,
      thumbnail: Simulacrum3,
      title: "Simulacro",
    },
  ];


   // Estados para controlar si se muestra el componente SliderImgsGallery para cada categoría
   const [showTeam, setShowTeam] = useState(false);
   const [showActivities, setShowActivities] = useState(false);
   const [showInformativeTalk, setShowInformativeTalk] = useState(false);
   const [showSimulacrum, setShowSimulacrum] = useState(false);
 
   // Funciones para manejar la apertura y cierre del componente SliderImgsGallery para cada categoría
   const handleTeamClick = () => setShowTeam(true);
   const handleActivitiesClick = () => setShowActivities(true);
   const handleInformativeTalkClick = () => setShowInformativeTalk(true);
   const handleSimulacrumClick = () => setShowSimulacrum(true);
 
   // Función para cerrar todos los componentes SliderImgsGallery
   const handleCloseAll = () => {
     setShowTeam(false);
     setShowActivities(false);
     setShowInformativeTalk(false);
     setShowSimulacrum(false);
   };
 
  return (
    <div className="container-sectionImgGallery">
      <section>
        <div className="sectionImgGallery-btns">
          <button type="button" data-filter="all">
            Todos
          </button>

          <button type="button" data-filter=".category-a">
            Equipo
          </button>
          <button type="button" data-filter=".category-b">
            Actividades
          </button>
          <button type="button" data-filter=".category-c">
            Charla informativa
          </button>
          <button type="button" data-filter=".category-d">
            Simulacro
          </button>
        </div>

        <div className="container-filterImgs" ref={containerImgs}>
          <div className="mix category-a" data-order="1">
            <ImageList
              sx={{
                width: "100%",
                maxWidth: 900,
                height: "100%",
                maxHeight: 750,
                transform: "translateZ(0)",
              }}
              rowHeight={200}
              gap={4}
            >
              {Team.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.original} cols={cols} rows={rows}>
                    <img
                      src={item.original}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }}
                      onClick={handleTeamClick}
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`star ${item.title}`}
                        >
                          <Diversity2Icon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
            {showTeam && (
            <SliderImgsGallery
              arrImgs={Team}
              onClose={() => setShowTeam(false)}
            />
            )}
          </div>

          <div className="mix category-b" data-order="2">
            <ImageList
              sx={{
                width: "100%",
                maxWidth: 900,
                height: "100%",
                maxHeight: 750,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: "translateZ(0)",
                marginTop: "0.5rem",
              }}
              rowHeight={200}
              gap={4}
            >
              {Activities.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.original} cols={cols} rows={rows}>
                    <img
                      src={item.original}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }} // Establecer ancho y alto al 100%
                      onClick={handleActivitiesClick}
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`star ${item.title}`}
                        >
                          <CelebrationIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
            {showActivities && (
            <SliderImgsGallery
              arrImgs={Activities}
              onClose={() => setShowActivities(false)}
            />
          )}
            {/* Muestra SliderImgsGallery si showGallery es true */}
          </div>

          <div className="mix category-c" data-order="3">
            <ImageList
              sx={{
                width: "100%",
                maxWidth: 900,
                height: "100%",
                maxHeight: 750,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                marginTop: "0.5rem",
                transform: "translateZ(0)",
              }}
              rowHeight={200}
              gap={4}
            >
              {InformativeTalk.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.original} cols={cols} rows={rows}>
                    <img
                      src={item.original}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }} // Establecer ancho y alto al 100%
                      onClick={handleInformativeTalkClick}
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`star ${item.title}`}
                        >
                          <PsychologyAltIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
            {showInformativeTalk && (
            <SliderImgsGallery
              arrImgs={InformativeTalk}
              onClose={() => setShowInformativeTalk(false)}
            />
          )}
            {/* Muestra SliderImgsGallery si showGallery es true */}
          </div>

          <div className="mix category-d" data-order="4">
            <ImageList
              sx={{
                width: "100%",
                maxWidth: 900,
                height: "100%",
                marginTop: "0.5rem",
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: "translateZ(0)",
              }}
              rowHeight={200}
              gap={4}
            >
              {Simulacrum.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.original} cols={cols} rows={rows}>
                    <img
                      src={item.original}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }} // Establecer ancho y alto al 100%
                      onClick={handleSimulacrumClick}
                      
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      title={item.title}
                      position="top"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={`star ${item.title}`}
                        >
                          <SettingsAccessibilityIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
            {showSimulacrum && (
            <SliderImgsGallery
              arrImgs={Simulacrum}
              onClose={() => setShowSimulacrum(false)}
            />
          )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImgGallery;
