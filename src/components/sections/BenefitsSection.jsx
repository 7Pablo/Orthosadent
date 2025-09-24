// BenefitsSection.jsx (Server component)

import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";
import SectionTitle from "../general/SectionTitle";
import BenefitsCard from "../cards/BenefitsCard";

export default function BenefitsSection({ trans }) {
    return (
        <section id="benefits" className="benefits-section">
            <div className="benefits-section__content">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                    <div className="benefits-section__top">
                        <SectionTitle
                            text={trans.navbar.benefits}
                            color="#C0AA72"
                        />
                        <h2>{trans.benefits.title}</h2>
                        <h3>{trans.benefits.body}</h3>
                    </div>
                </AnimatedSection>
                <div className="benefits-section__cards">
                    <AnimatedSection animation='coinFlip'>
                        <BenefitsCard
                            icon={getAssetPath("/icons/tooth.png")}
                            alt={trans.benefits.card1.image}
                            title={trans.benefits.card1.title}
                            body={trans.benefits.card1.body}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation='coinFlip' delay={0.2}>
                        <BenefitsCard
                            icon={getAssetPath("/icons/tools.png")}
                            alt={trans.benefits.card2.image}
                            title={trans.benefits.card2.title}
                            body={trans.benefits.card2.body}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation='coinFlip' delay={0.4}>
                        <BenefitsCard
                            icon={getAssetPath("/icons/hands.png")}
                            alt={trans.benefits.card3.image}
                            title={trans.benefits.card3.title}
                            body={trans.benefits.card3.body}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation='coinFlip' delay={0.6}>
                        <BenefitsCard
                            icon={getAssetPath("/icons/sparkles.png")}
                            alt={trans.benefits.card4.image}
                            title={trans.benefits.card4.title}
                            body={trans.benefits.card4.body}
                        />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
