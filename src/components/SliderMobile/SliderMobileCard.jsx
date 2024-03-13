import React from 'react';
import "./SliderMobileCard.css";

const SliderMobileCard = ({ image, title, subTitle, content }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative", // Añadir posición relativa para posicionar correctamente el div superpuesto
    };

    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Color oscurecido, puedes ajustar la opacidad cambiando el último valor (0.5)
    };

    const phoneNumber = "+51987635060"; // Número de teléfono de WhatsApp

    const openWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl);
    };

    return (
        <div className='slide' style={styles}>
            <div style={overlayStyle}></div> {/* Div superpuesto con color oscurecido */}
            <div className='content-slide'>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <div className='content-slide-content'>
                    <span>{content}</span>
                </div>
                <button onClick={openWhatsApp}>Solicitar presupuesto</button>
            </div>
        </div>
    );
}

export default SliderMobileCard;

