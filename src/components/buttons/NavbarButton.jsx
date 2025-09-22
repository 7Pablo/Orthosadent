// NavbarButton.jsx (Client component)
'use client';

import Image from "next/image";
import { getAssetPath } from "@/utils/getAssetPath";

export default function NavbarButton({ trans }) {

    // Refresh the page
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div 
            className="navbar__button"
            onClick={handleRefresh} 
        >
            <div className="navbar__button--logo">
                <Image
                    src={getAssetPath("/logos/orthosadent-logo.png")}
                    alt={trans.navbar.logo}
                    priority
                    width={40}
                    height={40}
                />
            </div>
            <h2>ORTHOSADENT</h2>
        </div>
    );
}