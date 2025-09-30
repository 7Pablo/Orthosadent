// ReviewsSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import SectionTitle from "../general/SectionTitle";
import AnimatedSection from "@/utils/AnimatedSection";
import ReviewsScroller from "../general/ReviewsScroller";

export default function ReviewsSection({ trans }) {

    // Reviews
    const reviews = [
       {
        img: getAssetPath("/pictures/review1.jpg"),
        name: "Eldabeth Hernández",
        period: `${trans.reviews.card1.month} 2025`,
        review: `${trans.reviews.card1.review}`
       },
       {
        img: getAssetPath("/pictures/review1.jpg"),
        name: "Eldabeth Hernández",
        period: `${trans.reviews.card1.month} 2025`,
        review: `${trans.reviews.card1.review}`
       },
       {
        img: getAssetPath("/pictures/review1.jpg"),
        name: "Eldabeth Hernández",
        period: `${trans.reviews.card1.month} 2025`,
        review: `${trans.reviews.card1.review}`
       },
    ];

    // Arrays repetidos
    const repeatedReviews = [...reviews, ...reviews]; 

    return (
        <section id="reviews" className="reviews-section">
            <div className="reviews-section__content">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <div className="reviews-section__top">
                        <SectionTitle
                            text={trans.navbar.reviews}
                            color="#C0AA72"
                        />
                        <h2>{trans.reviews.title}</h2>
                        <h3>{trans.reviews.body}</h3>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="bouncyRise" delay={0.2}>
                    <ReviewsScroller
                        slides={repeatedReviews}
                    />
                </AnimatedSection>
            </div>
        </section>
    );
}
