// ContactSection.jsx (Server component)

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import SectionTitle from "../general/SectionTitle";

export default function ContactSection({ trans }) {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-section__content">
                <div className="contact-section__left">
                    <div className="contact-section__left--text">
                        <SectionTitle
                            text={trans.navbar.contact}
                            color="#C0AA72"
                        />
                        <h2>{trans.contact.title}</h2>
                        <h3>{trans.contact.body}</h3>
                    </div>
                    <Image
                        src={getAssetPath("/pictures/contact-image.png")}
                        alt={trans.contact.image}
                        width={450}
                        height={600}
                    />
                </div>
                <div className="contact-section__right">

                </div>
            </div>
        </section>
    );
}
