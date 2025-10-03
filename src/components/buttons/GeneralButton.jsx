// GeneralButton.jsx (CLient component)
'use client';

import { smoothScroll } from '@/utils/smoothScroll';

export default function GeneralButton({
  type = "primary",
  children,
  scrollTo,  
  href,      
  download,  
  onClick
}) {

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault();
      smoothScroll(scrollTo, 1000);
    } else if (download) {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = download;
      const urlParts = download.split("/");
      link.download = urlParts[urlParts.length - 1];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (href) {
      e.preventDefault();
      window.open(href, "_blank");
    }

    if (onClick) onClick(e);
  };

  return (
    <button 
      onClick={handleClick}
      className={`general-button--${type}`}
    >
      <span className="general-button__text">{children}</span>
    </button>
  );
}
