// LanguageButton.jsx (Client component)
'use client';

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageButton({ trans, lang }) {
    const pathname = usePathname();
    const router = useRouter();

    const toggleLang = lang === "en" ? "es" : "en";
    const newHref = pathname.replace(`/${lang}`, `/${toggleLang}`);

    const handleLanguageChange = () => {
        router.push(newHref);
    };

    return (
        <div 
            className="language-button"
            onClick={handleLanguageChange}
        >
            <Image
                src={lang === "en" ? getAssetPath("/icons/spanish.png") : getAssetPath("/icons/english.png")}
                alt={trans.navbar.language}
                width={35}
                height={35}
            />
        </div>
    );
}
