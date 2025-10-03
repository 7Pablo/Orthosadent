// AboutSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import GeneralButton from "../buttons/GeneralButton";
import SectionTitle from "../general/SectionTitle";
import AnimatedSection from "@/utils/AnimatedSection";

export default function AboutSection({ trans }) {
    return (
        <section id="about" className="about-section">
            <div className="about-section__content">
                <div className="about-section__left">
                    <AnimatedSection animation="elegantReveal" delay={0.2}>
                        <Image
                            src={getAssetPath("/pictures/about-image.webp")}
                            alt={trans.hero.image}
                            height={675}
                            width={475}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={0.2}>
                        <div className="about-section__left--career">
                            <Image
                                src={getAssetPath("/images/central.png")}
                                alt={trans.about.university}
                                height={100}
                                width={200}
                            />
                            <Image
                                src={getAssetPath("/images/uanl.png")}
                                alt={trans.about.university}
                                height={50}
                                width={300}
                            />
                        </div>
                    </AnimatedSection>
                </div>
                <div className="about-section__right">
                    <div className="about-section__right--text">
                        <AnimatedSection animation="slideFromRight" delay={0.2}>
                            <SectionTitle
                                text={trans.navbar.about}
                                color="#C0AA72"
                            />
                        </AnimatedSection>
                        <AnimatedSection animation="slideFromRight" delay={0.4}>
                            <h2>Ana Paula Armendáriz Salas</h2>
                        </AnimatedSection>
                        <div className="about-section__right--body">
                            <AnimatedSection animation="slideFromRight" delay={0.6}>
                                <p>{trans.about.body1}</p>
                            </AnimatedSection>
                            <AnimatedSection animation="slideFromRight" delay={0.8}>
                                <p>{trans.about.body2}</p>
                            </AnimatedSection>
                            <AnimatedSection animation="slideFromRight" delay={1}>
                                <p>{trans.about.body3}</p>
                            </AnimatedSection>
                        </div>
                    </div>
                    <AnimatedSection animation="slideFromRight" delay={1.2}>
                        <div className="about-section__right--button">
                            <GeneralButton
                                type="secondary"
                                download="/files/CV_AnaPaula.pdf"
                            >
                                {trans.buttons.more}
                            </GeneralButton>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeInUp" delay={1.4}>
                        <div className="about-section__right--career">
                            <Image
                                src={getAssetPath("/images/central.png")}
                                alt={trans.about.university}
                                height={50}
                                width={100}
                            />
                            <Image
                                src={getAssetPath("/images/uanl.png")}
                                alt={trans.about.university}
                                height={50}
                                width={300}
                            />
                        </div>
                    </AnimatedSection>
                </div>
                <div className="about-section__background">
                    <div className="about-section__background--left">
                        <Image
                            src={getAssetPath("/images/blob.webp")}
                            alt="Blob"
                            height={1100}
                            width={1100}
                        />
                    </div>
                    <div className="about-section__background--right">
                        <Image
                            src={getAssetPath("/images/blob.webp")}
                            alt="Blob"
                            height={1100}
                            width={1100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}