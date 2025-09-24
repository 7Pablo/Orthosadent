// BenefitsCard.jsx (Server component)

import Image from "next/image";

export default function BenefitsCard({ icon, alt, title, body }) {
    return (
        <div className="benefits-card">
            <Image
                src={icon}
                alt={alt}
                height={60}
                width={60}
            />
            <div className="benefits-card__text">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}
