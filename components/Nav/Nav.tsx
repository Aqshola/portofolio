import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { spyScroll } from "../../utils/spyScroll";

const linkList = [
  { name: "Home", link: "#Home" },
  { name: "Skills", link: "#Skills" },
  {
    name: "Project",
    link: "#Project",
  },
];

function Nav() {
  const [activeLink, setactiveLink] = useState<string>("Home");
  useEffect(() => {
    if(typeof window !== undefined){
      window.addEventListener("scroll",()=> spyScroll(setactiveLink));
    }
  }, [])
  
  return (
    <nav className="sticky top-0 z-50 mx-auto flex max-w-screen-xl items-center justify-center gap-5 bg-white px-9 py-5">
      {linkList.map((link) => (
        <NavItem
          href={link.link}
          onClick={() => setactiveLink(link.name)}
          active={link.name === activeLink}
          key={link.name}
        >
          {link.name}
        </NavItem>
      ))}
    </nav>
  );
}

export default Nav;
