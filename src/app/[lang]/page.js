// page.js (LandingPage/Server component)

import { getTranslations } from "@/locales/translations";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";

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
            <BenefitsSection
              trans={trans} 
            />

            {/* About */}
            <AboutSection
              trans={trans} 
            />

            {/* Services */}
            <ServicesSection
              trans={trans}
            />

            {/* Contact */}
            <ContactSection
             trans={trans}
            />

            {/* Reviews */}
            <ReviewsSection
              trans={trans} 
            />

            {/* FAQ */}
            <FaqSection
              trans={trans}
            />

            {/* Footer */}
            <Footer
              trans={trans}
            />
        </div>
    );
}

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'es' },
  ];
}