import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./SectionWelcome.css"
import { useSelector } from 'react-redux';

const SectionWelcome = () => {
  const hideItem = useSelector((store) => store.hideItemsSlice);

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
    <article className='container-sectionWelcome'>
      <div className='sectionWelcome'>
        <div className='sectionWelcome-title-content'>
          <h2>¿Necesitas Consultarnos? </h2>
          <span>En Logo de la empresa ICEBERG TRAINING PERU-E.I.R.L, estamos aquí para ayudarte. Si tienes preguntas, inquietudes o simplemente quieres obtener más información sobre nuestros servicios de construcción, no dudes en contactarnos.</span>
        </div>
        <button className={`sectionWelcome-btn ${hideItem ? 'hideBtnWelcome': ''}`} onClick={() => scrollToSection("Contact")}>
          <span>Contacto</span>
          <ArrowForwardIcon className='sectionWelcome-iconArrow' fontSize='medium'></ArrowForwardIcon>
        </button>
      </div>
    </article>
  )
}

export default SectionWelcome;
