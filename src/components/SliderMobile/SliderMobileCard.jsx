import React from 'react';
import "./SliderMobileCard.css";

const SliderMobileCard = ({ image, title, subTitle, content }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    };

    const phoneNumber = "+51987635060"; // Número de teléfono de WhatsApp

    const openWhatsApp = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl);
    };

    return (
        <div className='slide' style={styles}>
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
