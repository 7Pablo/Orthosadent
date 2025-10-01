// FaqSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";
import SectionTitle from "../general/SectionTitle";
import FaqAccordion from "../general/FaqAccordion";

export default function FaqSection({ trans }) {
    return (
        <section id="faq" className="faq-section">
            <div className="faq-section__content">
                <div className="faq-section__left">
                    <FaqAccordion
                        trans={trans}
                    />
                </div>
                <div className="faq-section__right">
                    <AnimatedSection animation="slideFromRight" delay={0.2}>
                        <div className="faq-section__right--text">
                            <SectionTitle
                                text="FAQ"
                                color="#C0AA72"
                            />
                            <h2>{trans.faq.title}</h2>
                            <h3>{trans.faq.body}</h3>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="elegantReveal" delay={0.2}>
                        <Image
                            src={getAssetPath("/pictures/faq-image.png")}
                            alt={trans.contact.image}
                            width={650}
                            height={450}
                        />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}