// HeroSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import Navbar from "./Navbar";
import GeneralButton from "../buttons/GeneralButton";

export default async function HeroSection({trans, lang}) {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-section__navbar">
                <Navbar
                    trans={trans}
                    lang={lang}
                />
            </div>
            <div className="hero-section__content">
                <div className="hero-section__left">
                    <div className="hero-section__left--text">
                        <h1>{trans.hero.title}</h1>
                        <h2>{trans.hero.subtitle}</h2>
                    </div>
                    <div className="hero-section__left--button">
                        <GeneralButton
                            type="primary"
                            scrollTo="benefits"
                        >
                            {trans.buttons.begin}
                        </GeneralButton>
                    </div>
                </div>
                <div className="hero-section__right">
                    <Image
                        src={getAssetPath("/pictures/hero-image.webp")}
                        alt={trans.hero.image}
                        height={650}
                        width={500}
                    />
                </div>
            </div>
        </section>
    );
}

