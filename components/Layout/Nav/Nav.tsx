import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { spyScroll } from "../../../utils/spyScroll";
import clsx from "clsx";

const linkList = [
  { name: "Home", link: "#Home" },
  { name: "About", link: "#About" },
  { name: "Skills", link: "#Skills" },
  { name: "Project", link: "#Project" },
];

function Nav() {
  const [activeLink, setactiveLink] = useState<string>("Home");
  const [showMobielNav, setshowMobielNav] = useState<boolean>(false);
  

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => spyScroll(setactiveLink));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", (e) => {
        const currentScroll = window.scrollY;
        if (currentScroll >= 30) {
          setshowMobielNav(true);
        } else {
          setshowMobielNav(false);
        }
      });
    }
  }, []);

  return (
    <>
      <nav id="desktop">
        <div className="mx-auto mt-10 mb-5 flex max-w-screen-2xl items-center justify-center bg-white">
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
        </div>
      </nav>
      <nav id="mobile">
        <div
          className={clsx(
            "fixed left-1/2  mx-auto mt-5 mb-5 flex w-fit -translate-x-1/2 items-center rounded-full border-2 border-black bg-white py-1 px-2 transition-all duration-300 z-50",
            showMobielNav && ["opacity-1 top-0"],
            !showMobielNav && ["-top-96 opacity-0"]
          )}
        >
          {linkList.map((link) => (
            <NavItem
              layoutId="mobile"
              href={link.link}
              onClick={() => setactiveLink(link.name)}
              active={link.name === activeLink}
              key={link.name}
            >
              {link.name}
            </NavItem>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;
