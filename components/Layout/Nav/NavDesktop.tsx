import React from 'react'
import NavItem from './NavItem'


type Props = {
    linkList:{
        name:string,
        link:string
    }[]
    handleActiveLink:(link:string)=>void
    activeLink:string
    type:string
}

export default function NavDesktop({linkList,handleActiveLink,activeLink, type}: Props) {
    console.log(activeLink)
  return (
    <nav id="desktop">
        <div className="mx-auto mt-10 mb-5 flex max-w-screen-2xl items-center justify-center bg-white">
          {linkList.map((link) => (
            <NavItem
              href={link.link}
              onClick={() => handleActiveLink(link.name)}
              active={link.name === activeLink }
              key={link.name}
            >
              {link.name}
            </NavItem>
          ))}
        </div>
      </nav>
  )
}