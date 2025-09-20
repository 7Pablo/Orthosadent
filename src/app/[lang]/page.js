// page.js (LandingPage/Server component)

import { getTranslations } from "@/locales/translations";
import { getAssetPath } from "@/utils/getAssetPath";
import Image from "next/image";
import AnimatedSection from "@/utils/AnimatedSection";

// Metadata

// LandingPage
export default async function LandingPage({ params }) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="landing-page">
            {/* Hero */}

            {/* Benefits */}

            {/* About */}

            {/* Services */}

            {/* Contact */}

            {/* Reviews */}

            {/* FAQ */}

        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}