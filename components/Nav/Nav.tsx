import React, { useState } from "react";
import NavItem from "./NavItem";

const linkList = [
  { name: "Home", link: "#opening" },
  { name: "Skills", link: "#skills" },
  {
    name: "Project",
    link: "#projects",
  },
];

function Nav() {
  const [activeLink, setactiveLink] = useState<string>("Home");
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
