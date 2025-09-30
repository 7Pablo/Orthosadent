// ContactSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import SectionTitle from "../general/SectionTitle";
import ContactCard from "../cards/ContactCard";
import AnimatedSection from "@/utils/AnimatedSection";

export default function ContactSection({ trans }) {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-section__content">
                <div className="contact-section__left">
                    <AnimatedSection animation="slideFromLeft" delay={0.2}>
                        <div className="contact-section__left--text">
                            <SectionTitle
                                text={trans.navbar.contact}
                                color="#C0AA72"
                            />
                            <h2>{trans.contact.title}</h2>
                            <h3>{trans.contact.body}</h3>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection animation="elegantReveal" delay={0.2}>
                        <Image
                            src={getAssetPath("/pictures/contact-image.png")}
                            alt={trans.contact.image}
                            width={450}
                            height={600}
                        />
                    </AnimatedSection>
                </div>
                <div className="contact-section__right">
                    <AnimatedSection animation="waveRise" delay={0.2} className="animated-section">
                        <ContactCard
                            type="whatsapp"
                            icon={getAssetPath("/icons/wpp-g.svg")}
                            title="WhatsApp"
                            body="+593 99-980-7754"
                            message={trans.contact.message}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="waveRise" delay={0.4} className="animated-section">
                        <ContactCard
                            type="general"
                            icon={getAssetPath("/icons/phone-g.svg")}
                            title={trans.contact.phone}
                            body="02-252-6887"
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="waveRise" delay={0.6} className="animated-section">
                        <ContactCard
                            type="email"
                            icon={getAssetPath("/icons/mail-g.svg")}
                            title={trans.contact.email}
                            body="clinicaorthosadent@gmail.com"
                            message={trans.contact.message}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="waveRise" delay={0.8} className="animated-section">
                        <ContactCard
                            type="general"
                            icon={getAssetPath("/icons/address-g.svg")}
                            title={trans.contact.address.title}
                            body={trans.contact.address.address}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="waveRise" delay={1} className="animated-section">
                        <ContactCard
                            type="general"
                            icon={getAssetPath("/icons/time-g.svg")}
                            title={trans.contact.time.title}
                            body={`${trans.contact.time.monday}: 9:00 – 19:00\n${trans.contact.time.saturday}: 9:00 – 13:00`}
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="waveRise" delay={1.2} className="animated-section">
                        <ContactCard
                            type="instagram"
                            icon={getAssetPath("/icons/insta-g.svg")}
                            title="Instagram"
                            body="@orthosadent.ec"
                        />
                    </AnimatedSection>
                    <AnimatedSection animation="waveRise" delay={1.4} className="animated-section">
                        <ContactCard
                            type="tiktok"
                            icon={getAssetPath("/icons/tiktok-g.svg")}
                            title="TikTok"
                            body="@orthosadent.ec"
                        />
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
