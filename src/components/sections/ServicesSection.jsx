// ServicesSection.jsx (Server component)

import { getAssetPath } from "@/utils/getAssetPath";
import SectionTitle from "../general/SectionTitle";
import AnimatedSection from "@/utils/AnimatedSection";
import ServicesScroller from "../general/ServicesScroller";

export default function ServicesSection({ trans }) {

    // Services
    const services = [
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service1.image}`,
        title: `${trans.services.service1.title}`,
        bodyShort: `${trans.services.service1.short}`,
        bodyLong: `${trans.services.service1.body}`,
       },
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service2.image}`,
        title: `${trans.services.service2.title}`,
        bodyShort: `${trans.services.service2.short}`,
        bodyLong: `${trans.services.service2.body}`,
       },
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service3.image}`,
        title: `${trans.services.service3.title}`,
        bodyShort: `${trans.services.service3.short}`,
        bodyLong: `${trans.services.service3.body}`,
       },
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service4.image}`,
        title: `${trans.services.service4.title}`,
        bodyShort: `${trans.services.service4.short}`,
        bodyLong: `${trans.services.service4.body}`,
       },
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service5.image}`,
        title: `${trans.services.service5.title}`,
        bodyShort: `${trans.services.service5.short}`,
        bodyLong: `${trans.services.service5.body}`,
       },
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service6.image}`,
        title: `${trans.services.service6.title}`,
        bodyShort: `${trans.services.service6.short}`,
        bodyLong: `${trans.services.service6.body}`,
       },
       {
        img: getAssetPath("/pictures/about-image.webp"),
        alt: `${trans.services.service7.image}`,
        title: `${trans.services.service7.title}`,
        bodyShort: `${trans.services.service7.short}`,
        bodyLong: `${trans.services.service7.body}`,
       },
    ];

    return (
        <div className="services-section">
            <div className="services-section__content">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <div className="services-section__top">
                        <SectionTitle
                            text={trans.navbar.services}
                            color="#ffffff"
                        />
                        <h2>{trans.services.title}</h2>
                        <h3>{trans.services.body}</h3>
                    </div>
                </AnimatedSection>
                <ServicesScroller
                    slides={services}
                />
            </div>
        </div>
    );
}
