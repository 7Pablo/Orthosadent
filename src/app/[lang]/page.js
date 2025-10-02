// page.js (LandingPage/Server component)

import { getTranslations } from "@/locales/translations";
import { getAssetPath } from "@/utils/getAssetPath";
import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/sections/Footer";

// Metadata 
export async function generateMetadata({ params }) {

  // Translations
  const { lang } = await params; 
  const trans = await getTranslations(lang);

  // Canonical
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const path = `/${lang}`; 
  const canonicalUrl = `${baseUrl}${path}`;

  return {
    title: trans.metadata?.title || "Ortodoncia y ortopedia maxilar – Orthosadent - Ana Paula Armenáriz Salas",
    description: trans.metadata?.description || "Atención odontológica especializada en ortodoncia, ortopedia maxilar, implantes y rehabilitación oral. La Dra. Ana Paula Armendáriz ofrece tratamientos personalizados con ética, calidad y calidez para transformar tu sonrisa.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: trans.metadata?.title || "Ortodoncia y ortopedia maxilar – Orthosadent - Ana Paula Armenáriz Salas",
      description: trans.metadata?.description || "Atención odontológica especializada en ortodoncia, ortopedia maxilar, implantes y rehabilitación oral. La Dra. Ana Paula Armendáriz ofrece tratamientos personalizados con ética, calidad y calidez para transformar tu sonrisa.",
      url: canonicalUrl,
      siteName: "Orthosadent",
      images: [
        {
          url: getAssetPath("/logos/orthosadent-logo.png"),
          height: 630,
          alt: trans.metadata?.title_short || "Orthosadent – Ortodoncia y Ortopedia Maxilar",
        },
      ],
      locale: lang,
      type: "website",
    },
  };
}

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