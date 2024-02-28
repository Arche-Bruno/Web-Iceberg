import React from "react";
import "./SectionClients.css";
import imgClient from "./../../imgs/clientes/cliente2-new.png";
import imgClient1 from "./../../imgs/clientes/cliente1-new.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ImageGallery from "react-image-gallery";
import client1 from "../../imgs/clientes/client1.png";
import client2 from "../../imgs/clientes/client2.png";
import client3 from "../../imgs/clientes/client3.png";

const clients = [
  {
    original: client1,
    author: "@bkristastucchio",
    thumbnail: client1,
  },
  {
    original: client2,
    author: "@bkristastucchio",
    thumbnail: client2,
  },
  {
    original: client3,
    author: "@bkristastucchio",
    thumbnail: client3,
  },
];

import "react-image-gallery/styles/css/image-gallery.css";
const SectionClients = () => {
  return (
    <div className="container-sectionClients">
      <section>
        <div className="sectionClients">
          <div className="sectionClients-comments">
            <div className="sectionClients-comment">
              <div className="comment-img">
                <img src={imgClient} alt="image-client" />
              </div>

              <div className="comment-name-status">
                <span>Standar sac</span>
                <p>Ingenieria y construcción</p>
              </div>

              <div className="comment-comment">
                <span>
                  Estamos muy impresionados con la calidad del trabajo realizado
                  por el equipo de ICEBERG TRAINING PERU E.I.R.L Su enfoque
                  profesional y compromiso con la excelencia realmente se
                  destacan en cada proyecto que han realizado para nosotros.
                  ¡Recomendamos encarecidamente sus servicios!
                </span>
              </div>
              <div className="comment-rating">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
            </div>
            <div className="sectionClients-comment comment-two">
              <div className="comment-img">
                <img src={imgClient1} alt="image-client" />
              </div>

              <div className="comment-name-status">
                <span>Iceberg perú</span>
                <p>Soluciones Integrales</p>
              </div>

              <div className="comment-comment">
                <span>
                Nos complace expresar nuestra profunda satisfacción con Iceberg Perú. Su enfoque integral y compromiso con la excelencia han superado con creces nuestras expectativas. Cada proyecto ejecutado por su equipo demuestra un estándar de calidad excepcional y un profesionalismo incomparable.
                </span>
              </div>
              <div className="comment-rating">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={4}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
            </div>
          </div>

          <div className="sectionClients-bg">
            <div className="sectionClients-ImgClients">
              <ImageGallery
                items={clients}
                showBullets={true}
                showPlayButton={false}
                autoPlay={true}
                slideInterval={4000}
                slideDuration={900}
                thumbnailPosition="bottom"
                showFullscreenButton={false}
                showNav={false}
                useTranslate3D={true}
                thumbnailWidth={100} // Especifica el ancho de la miniatura en píxeles
                thumbnailHeight={60} // Especifica el alto de la miniatura en píxeles
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionClients;
