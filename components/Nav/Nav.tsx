import React, { useState } from 'react'
import NavItem from './NavItem'



const linkList=["Home","Skills","Project"]

function Nav() {
  const [activeLink, setactiveLink] = useState<string>("Home")
  return (
    <nav className='max-w-screen-xl sticky top-0 bg-white z-50 items-center flex gap-5 px-9 py-5 justify-center mx-auto'>
      {linkList.map((link)=>(
        <NavItem onClick={()=>setactiveLink(link)} active={link===activeLink} key={link}>{link}</NavItem>
      ))}
        
    </nav>
  )
}

export default Nav