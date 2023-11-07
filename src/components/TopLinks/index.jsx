import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import "./TopLinks.css";

function TopLinks(props) {
 const { seperator, links } = props;
 const containerRef = useRef();
 const [showArrows, setShowArrows] = useState(false);
 console.log(links)

 useEffect(() => {
  if (containerRef.current?.scrollWidth > containerRef.current?.clientWidth) {
   setShowArrows(true);
  } else {
   setShowArrows(false);
  }
 }, [containerRef, setShowArrows]);

 const scrollLeft = () => {
  containerRef.current?.scrollBy(-150, 0);
 };
 const scrollRight = () => {
  containerRef.current?.scrollBy(150, 0);
 };

 return (
  <div className="quick-links__container">
   {showArrows && (
    <button className="arrows" onClick={scrollLeft}>
     <FaArrowAltCircleLeft />
    </button>
   )}
   <div ref={containerRef} className="quick-links__links hide-scrollbar">
    {links.map((link, index) => {
     const linkTag = (
      <a key={index} href={link.href} className="quick-links__link">
       {link.text}
      </a>
     );
     if (index !== links.length - 1) {
      return [linkTag, seperator];
     }

     return linkTag;
    })}
   </div>
   {showArrows && (
    <button className="arrows" onClick={scrollRight}>
     <FaArrowAltCircleRight />
    </button>
   )}
  </div>
 );
}

export default TopLinks;

export function TopLinksContainer() {
 console.log(links)
 return <TopLinks seperator="|" links={links} />;
}

const links = [
 {
  text: "Mail Portal",
  href: "https://mail.google.com/a/ptuniv.edu.in",
 },
 {
  text: "IIS",
  href: "https://pytuiis.org",
 },
 {
  text: "T&P",
  href: "https://tnp.pec.edu",
 },
 {
  text: "Alumni",
  href: "https://pecaa.pec.edu",
 },
 {
  text: "Contact",
  href: "#main-footer",
 },
];
