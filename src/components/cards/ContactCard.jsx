// ContactCard.jsx (Client component)
'use client';

import Image from "next/image";

export default  function ContactCard({ 
    type, 
    icon, 
    title, 
    body,
    message
}) {

    const handleClick = () => {
    if (type === "whatsapp") {
       const url = `https://wa.me/593999807754?text=${encodeURIComponent(message)}`;
       window.open(url, "_blank");
    } else if (type === "email") {
      const url = `mailto:clinicaorthosadent@gmail.com?subject=Interesado%20en%20sus%20servicios&body=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else if (type === "instagram") {
      window.open("https://www.instagram.com/orthosadent.ec?igsh=MTBkZHJzcnl5cnExcQ%3D%3D&utm_source=qr", "_blank");
    } else if (type === "tiktok") {
      window.open("https://www.tiktok.com/@orthosadent.ec?_t=ZM-8zoM9soTJbB&_r=1", "_blank");
    }
  };

    return (
        <div 
            className={`contact-card ${type !== "general" ? "contact-card--clickable" : ""}`}
            onClick={type !== "general" ? handleClick : undefined}
        >
            <Image
                src={icon}
                alt={title}
                height={35}
                width={35}
            />
            <div className="contact-card__info">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}
