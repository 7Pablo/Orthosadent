// ReviewsCard.jsx (Server component)

import Image from "next/image";

export default function ReviewsCard({ img, name, period, review }) {
    return (
        <div className="reviews-card">
            <div className="reviews-card__image">
                <Image
                    src={img}
                    alt={name}
                    height={80}
                    width={80}
                />
            </div>
            <div className="reviews-card__top">
                <h2>{name}</h2>
                <h3>{period}</h3>
            </div>
            <p>{review}</p>
        </div>
    );
}
