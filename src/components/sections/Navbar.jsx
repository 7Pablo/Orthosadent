// Navbar.jsx (Server component)

import HamDropdown from "../buttons/HamDropdown";
import LanguageButton from "../buttons/LanguageButton";
import NavbarButton from "../buttons/NavbarButton";
import NavbarLinks from "../general/NavbarLinks";

export default async function Navbar({ trans, lang }) {
    return (
        <div className="navbar">
            <NavbarButton trans={trans} />
            <NavbarLinks trans={trans} />
            <LanguageButton 
                trans={trans}
                lang={lang}
            />
            <HamDropdown
                trans={trans}
                lang={lang}
            />
        </div>
    );
}
