// HeroSection.jsx (HeroSection/Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import AnimatedSection from "@/utils/AnimatedSection";
import Navbar from "./Navbar";

export default async function HeroSection({trans, lang}) {
    return (
        <div className="hero-section">
            <div className="hero-section__navbar">
                <Navbar
                    trans={trans}
                    lang={lang}
                />
            </div>
            <div className="hero-section__content">
                <h1>{trans.hero.title}</h1>
                <h1>{trans.hero.subtitle}</h1>
            </div>
        </div>
    );
}

