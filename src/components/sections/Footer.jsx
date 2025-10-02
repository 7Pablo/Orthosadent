// Footer.js (Server component)

import { getCurrentYear } from "@/utils/date";
import AnimatedSection from "@/utils/AnimatedSection";
import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import SocialButton from "../buttons/SocialButton";
import FooterLinks from "../general/FooterLinks";

import React from 'react';

export default function Footer({ trans }) {

    // Year
    const currentYear = getCurrentYear();

    return (
        <section id="footer" className="footer">
            <div className="footer__content">
                <AnimatedSection animation="riseFromBottom" delay={0.2}>
                    <div className="footer__top">
                        <div className="footer__top--logo">
                            <Image
                                src={getAssetPath("/logos/orthosadent-logo-white.png")}
                                alt={trans.navbar.logo}
                                priority
                                width={200}
                                height={200}
                                style={{ objectFit: "contain" }}
                            />
                            <div className="footer__top--logo-text">
                                <h2>ORTHOSADENT</h2>
                            </div>
                        </div>
                        <p>{trans.footer.body}</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection animation="riseFromBottom" delay={0.4}>
                    <hr/>
                </AnimatedSection>
                <AnimatedSection animation="riseFromBottom" delay={0.6} className="animated-section">
                    <div className="footer__bottom">
                        <div className="footer__bottom--contact">
                            <h2>{trans.navbar.contact}</h2>
                            <div className="footer__bottom--contact-items">
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/address.svg")}
                                        alt={trans.footer.icon}
                                        width={25}
                                        height={25}
                                    />
                                    <p>Av. República E6-561 y Eloy Alfaro. Edificio Consorcio Profesional. Planta baja. Quito, Ecuador. </p>
                                </div>
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/phone.svg")}
                                        alt={trans.footer.icon}
                                        width={25}
                                        height={25}
                                    />
                                    <p>02-252-6887</p>
                                </div>
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/wpp.svg")}
                                        alt={trans.footer.icon}
                                        width={25}
                                        height={25}
                                    />
                                    <p>+593 99-980-7754</p>
                                </div>
                                <div className="footer__bottom--contact-item">
                                    <Image
                                        src={getAssetPath("/icons/mail.svg")}
                                        alt={trans.footer.icon}
                                        width={25}
                                        height={25}
                                    />
                                    <p>clinicaorthosadent@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer__bottom--links">
                            <h2>{trans.footer.links}</h2>
                            <FooterLinks trans={trans} />
                        </div>
                        <div className="footer__bottom--social">
                            <h2>{trans.footer.social}</h2>
                            <div className="footer__bottom--social-items">
                                <SocialButton
                                    icon={getAssetPath("/icons/insta.svg")}
                                    text="@orthosadent.ec"
                                    link="https://www.instagram.com/orthosadent.ec?igsh=MTBkZHJzcnl5cnExcQ%3D%3D&utm_source=qr"
                                />
                                <SocialButton
                                    icon={getAssetPath("/icons/tiktok.svg")}
                                    text="@orthosadent.ec"
                                    link="https://www.tiktok.com/@orthosadent.ec?_t=ZM-8zoM9soTJbB&_r=1"
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection animation="fadeInScale" delay={0.6}>
                    <div className="footer__copyright">
                        <p>@{currentYear} Orthosadent. {trans.footer.copyright}</p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
