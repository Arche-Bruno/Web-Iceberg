import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Slider from "./components/Slider/Slider";
import SliderMobile from "./components/SliderMobile/SliderMobile";
import SectionWelcome from "./components/SectionWelcome/SectionWelcome";
import { useSelector } from "react-redux";
import SectionServices from "./components/SectionServices/SectionServices";
import SectionVideo from "./components/SectionVideo/SectionVideo";
import SectionTitles from "./components/SectionTitles/SectionTitles";
import SectionQualities from "./components/SectionQualities/SectionQualities";
import ImgGallery from "./components/ImgsGallery/ImgGallery";
import SectionTrayectory from "./components/SectionTrayectory/SectionTrayectory";
import SectionMembers from "./components/SectionMembers/SectionMembers";
import SectionClients from "./components/SectionClients/SectionClients"
import SectionAbout from "./components/SectionAbout/SectionAbout";
import SectionContact from "./components/SectionContact/SectionContact";
import SectionFooter from "./components/SectionFooter/SectionFooter";
import logo from "./imgs/logo.png"

const dataTitles = [
  {
    subSubTitle: 'te damos la',
    subTitle: 'Bienvenida a',
    title: 'Iceberg training peru- e.i.r.l',
    content: (
      <>
     
        En la empresa <img src={logo}width={20} alt="Logo de Iceberg Training Peru" /> <span className="name-empresa">ICEBERG TRAINING PERU-E.I.R.L</span>, nuestra misión es brindar soluciones de construcción de alta calidad que satisfagan tus necesidades. Ya sea que estés buscando un precio justo, soporte constante las 24 horas o entregas rápidas, estamos aquí para ti.
      </>
    ),
  },
  {
    subSubTitle: 'Somos expertos en',
    subTitle: 'Lo que',
    title: 'Estamos Ofreciendo',
    content: (
      <>
        En <img src={logo} width={20}alt="Logo de Iceberg Training Peru" />
        <span className="name-empresa">ICEBERG TRAINING PERU-E.I.R.L</span>, estamos comprometidos a brindar soluciones de construcción excepcionales para satisfacer tus necesidades Descubre nuestros servicios y cómo podemos ayudarte a construir tus sueños.
      </>
    ),
  },
  {
    subSubTitle: 'NUESTROS PROYECTOS',
    subTitle: 'EXPLORA NUESTRA',
    title: 'GALERÍA DE PROYECTOS',
    content: (
      <>
        
        En la empresa <img src={logo} width={20}alt="Logo de Iceberg Training Peru" /> <span className="name-empresa">ICEBERG TRAINING PERU-E.I.R.L</span>, estamos orgullosos de presentar nuestros proyectos excepcionales que reflejan nuestra dedicación a la excelencia en construcción.Descubre nuestra variedad de proyectos y cómo hemos transformado ideas en realidad.
      </>
    ),
  },
  {
    subSubTitle: 'CONOCE A NUESTRO TALENTOSO EQUIPO',
    subTitle: 'EXPERTOS',
    title: 'MIEMBROS DEL EQUIPO',
    content: (
      <>
 
        Descubre a las mentes creativas detrás de nuestro éxito. Nuestro equipo está dedicado a brindarte soluciones innovadoras y resultados excepcionales.¡Permítenos presentarte a quienes hacen posible todo esto!
      </>
    ),
  },
  {
    subSubTitle: 'OPINIONES DE LOS CLIENTES',
    subTitle: 'testimonios',
    title: 'de clientes',
    content: (
      <>
        
        Descubre lo que nuestros clientes tienen que decir sobre nosotros.Aquí están algunas de las opiniones que hemos recibido
      </>
    ),
  },
  {
    subSubTitle: 'CONSTRUYENDO JUNTOS',
    subTitle: 'EXPERIENCIA EN',
    title: 'CONSTRUCCIÓN Y DESARROLLO',
    content: (
      <>
        <img src={logo} width={20}alt="Logo de Iceberg Training Peru" />
        <span className="name-empresa">ICEBERG TRAINING PERU-E.I.R.L</span>se destaca en la industria de la construcción y desarrollo. Nuestra experiencia y compromiso nos convierten en tu mejor elección para proyectos de calidad y excelencia.
      </>
    ),
  },
];
function App() {
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
    <div className="container-app">
      <header>
        <Nav></Nav>

        <SliderMobile></SliderMobile>
      </header>
      <main>
        <SectionWelcome></SectionWelcome>
        <div id="About">
        <SectionTitles  subSubTitle={dataTitles[0].subSubTitle} subTitle={dataTitles[0].subTitle} title={dataTitles[0].title} content={dataTitles[0].content} ></SectionTitles>
        </div>
     
        <SectionServices></SectionServices>
        <SectionVideo></SectionVideo>

        <div id="Services">
        <SectionTitles subSubTitle={dataTitles[1].subSubTitle} subTitle={dataTitles[1].subTitle} title={dataTitles[1].title} content={dataTitles[1].content} ></SectionTitles>

        </div>



        <SectionQualities></SectionQualities>
        <div id="Gallery"> 
          <SectionTitles subSubTitle={dataTitles[2].subSubTitle} subTitle={dataTitles[2].subTitle} title={dataTitles[2].title} content={dataTitles[2].content} ></SectionTitles>


        </div>
       
        <ImgGallery></ImgGallery>

         <SectionTrayectory></SectionTrayectory>
         <div id="Team">
         <SectionTitles subSubTitle={dataTitles[3].subSubTitle} subTitle={dataTitles[3].subTitle} title={dataTitles[3].title} content={dataTitles[3].content} ></SectionTitles>
         <SectionMembers></SectionMembers>
         </div>
      


         <div className="sectionClients-card" >
         <SectionTitles subSubTitle={dataTitles[4].subSubTitle} subTitle={dataTitles[4].subTitle} title={dataTitles[4].title} content={dataTitles[4].content} ></SectionTitles>
         <SectionClients></SectionClients>
         </div>

         <div className="sectionAboutUs-card">
          <div className="sectionAboutUs-cardd one">
          <SectionAbout></SectionAbout>
          </div>
          <div className="sectionAboutUs-cardd two">
          <SectionTitles subSubTitle={dataTitles[5].subSubTitle} subTitle={dataTitles[5].subTitle} title={dataTitles[5].title} content={dataTitles[5].content} ></SectionTitles>
          <button onClick={() => scrollToSection("Contact")}>
            Conoce Más
          </button>
          </div>
        

         </div>
    <div id="Contact">
    <SectionContact></SectionContact>
    </div>
        
       
      </main>
      <footer>
        <SectionFooter></SectionFooter>
      </footer>

    </div>
  );
}

export default App;
