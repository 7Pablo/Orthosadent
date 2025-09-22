// NavbarLinks.jsx (Client component)
'use client';

import { smoothScroll } from '@/utils/smoothScroll';

export default function NavbarLinks({ trans }) {

  const handleClick = (e, targetId) => {
    e.preventDefault();
    smoothScroll(targetId, 1000);
  };

  return (
    <div className="navbar__items">
      <a href="#benefits" onClick={e => handleClick(e, 'benefits')}>
        <span className="nav-inner">{trans.navbar.benefits}</span>
      </a>
      <a href="#about" onClick={e => handleClick(e, 'about')}>
        <span className="nav-inner">{trans.navbar.about}</span>
      </a>
      <a href="#services" onClick={e => handleClick(e, 'services')}>
        <span className="nav-inner">{trans.navbar.services}</span>
      </a>
      <a href="#contact" onClick={e => handleClick(e, 'contact')}>
        <span className="nav-inner">{trans.navbar.contact}</span>
      </a>
      <a href="#reviews" onClick={e => handleClick(e, 'reviews')}>
        <span className="nav-inner">{trans.navbar.reviews}</span>
      </a>
    </div>
  );
}