import React, { useState } from "react";
import "./SectionContact.css";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
const SectionContact = () => {
  const [text, setText] = useState("");
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

  //
  return (
    <div className="container-sectionContact">
      <section>
        <div className="sectionContact">
          <form action="" className="sectionContact-boletin">
            <div className="sectionContact-label">
              <span className="sectionContact-label-subTitle">
                Mantente al día
              </span>

              <label htmlFor="">
                {" "}
                <span className="sectionContact-sub">Suscribete</span>{" "}
                <span className="sectionContact-title">al boletín</span>
              </label>
            </div>

            <div className="sectionContact-input">
              <input type="email" placeholder="ingresa tu correo electronico" />
              <button>Unirme</button>
            </div>
          </form>

  <div className="sectionContact-dataUser-container">

  <form action="" className="sectionContact-dataUser">
            <h2>Contactanos</h2>
            <div className="sectionContact-dataUser-inputs">
              <label htmlFor="">
                <input type="text" placeholder="Ingrese su Nombre" />
              </label>
              <label htmlFor="">
                <input type="email" placeholder="Ingrese su email" />
              </label>
            </div>

            <label htmlFor="">
              <Textarea
                placeholder="Escriba un comentario aquí"
                value={text}
                onChange={(event) => setText(event.target.value)}
                minRows={2}
                maxRows={4}
                startDecorator={
                  <Box sx={{ display: "flex", gap: 0.5, flex: 1 }}>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji("👍")}
                    >
                      👍
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji("🏖")}
                    >
                      🏖
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji("😍")}
                    >
                      😍
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji("👍")}
                    >
                      👍
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji("🏖")}
                    >
                      🏖
                    </IconButton>
                    <IconButton
                      variant="outlined"
                      color="neutral"
                      onClick={addEmoji("😍")}
                    >
                      😍
                    </IconButton>
                    <Button
                      variant="outlined"
                      color="neutral"
                      sx={{ ml: "auto" }}
                    >
                      See all
                    </Button>
                  </Box>
                }
                endDecorator={
                  <Typography level="body-xs" sx={{ ml: "auto" }}>
                    {text.length} character(s)
                  </Typography>
                }
                sx={{ width: "100%", height: "100%" }}
              />
            </label>
            <button className="sectionContact-btn">Enviar</button>
          </form>
  </div>
          

  <div className="sectionContact-contactMethods">
  <ul>
    <li>
      {" "}
      <button>
        <PlaceIcon className="contactMethods-icon" fontSize="large" />
      </button>
      <div className="sectionContact-contactMethods-info">
        <span>Dirreción de oficina</span>
        <a href="https://www.google.com/maps?q=Jose+Carlos+Mariategui+L3+10,+Nuevo+Chimbote,+Ancash" target="_blank">
          <p>Jose Carlos Mariategui L3 10, Nuevo Chimbote, Ancash</p>
        </a>{" "}
      </div>{" "}
    </li>
    <li>
      <button>
        <WhatsAppIcon className="contactMethods-icon" fontSize="large" />
      </button>
      <div className="sectionContact-contactMethods-info">
        <span>NÚMERO DE ATENCIÓN</span>
        <a href="https://wa.me/51987635060" target="_blank">
          <p>+51 987 635 060</p>
        </a>{" "}
      </div>{" "}
    </li>
    <li>
      <button>
        <MarkEmailReadIcon className="contactMethods-icon" fontSize="large" />
      </button>
      <div className="sectionContact-contactMethods-info">
        <span>ENVIAR MENSAJE</span>
        <a href="mailto:icebergperu.training20@gmail.com" target="_blank">
          <p>icebergperu.training20@gmail.com</p>
        </a>{" "}
      </div>{" "}
    </li>
  </ul>
</div>

        </div>
       
      </section>
    </div>
  );
};

export default SectionContact;
