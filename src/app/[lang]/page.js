// page.js (LandingPage/Server component)

import { getTranslations } from "@/locales/translations";
import HeroSection from "@/components/sections/HeroSection";

// Metadata

// LandingPage
export default async function LandingPage({ params }) {

    // Translations
    const { lang } = await params;
    const trans = await getTranslations(lang);

    return (
        <div className="landing-page">
            {/* Hero */}
            <HeroSection 
              trans={trans} 
              lang={lang}
            />

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