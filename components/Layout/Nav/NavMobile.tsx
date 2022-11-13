import clsx from 'clsx'
import React from 'react'
import NavItem from './NavItem'


type Props = {
    linkList:{
        name:string,
        link:string
    }[]
    handleActiveLink:(link:string)=>void
    activeLink:string
    showMobileNav:boolean
    type:string
}

export default function NavMobile({linkList,handleActiveLink,activeLink, showMobileNav, type}: Props) {
  return (
    <nav id="mobile">
        <div
          className={clsx(
            "fixed left-1/2  mx-auto mt-10 mb-5 flex w-fit -translate-x-1/2 items-center rounded-full border-2 border-black bg-white py-3 px-2 transition-all duration-300",
            // showMobileNav && ["opacity-1 top-0"],
            // !showMobileNav && ["-top-96 opacity-0"]
          )}
        >
          {linkList.map((link) => (
            <NavItem
              href={link.link}
              onClick={() => handleActiveLink(link.name)}
              active={link.name === activeLink && type=="mobile"}
              key={link.name}
            >
              {link.name}
            </NavItem>
          ))}
        </div>
      </nav>
  )
}