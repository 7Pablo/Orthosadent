// AboutSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import GeneralButton from "../buttons/GeneralButton";
import SectionTitle from "../general/SectionTitle";

export default function AboutSection({ trans }) {
    return (
        <section id="about" className="about-section">
            <div className="about-section__content">
                <div className="about-section__left">
                    <Image
                        src={getAssetPath("/pictures/about-image.webp")}
                        alt={trans.hero.image}
                        height={700}
                        width={500}
                    />
                </div>
                <div className="about-section__right">
                    <div className="about-section__right--text">
                        <SectionTitle
                            text={trans.navbar.about}
                            color="#C0AA72"
                        />
                        <h2>Ana Paula Armendáriz Salas</h2>
                        <div className="about-section__right--body">
                            <p>{trans.about.body1}</p>
                            <p>{trans.about.body2}</p>
                            <p>{trans.about.body3}</p>
                        </div>
                    </div>
                    <div className="about-section__right--button">
                        <GeneralButton
                            type="secondary"
                            href="https://www.google.com/?zx=1758670895695&no_sw_cr=1"
                        >
                            {trans.buttons.more}
                        </GeneralButton>
                    </div>
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