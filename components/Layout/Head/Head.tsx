import React from 'react'
import NextHead from "next/head"



export default function Head() {
  
  return (
    <NextHead>
        <title>House of Shola</title>
        <meta name="title" content="House of Shola" />
        <meta
          name="description"
          content="Yahallo, Im Shola cheerful exciting, friendly frontend developer who likes learning new stuff and collaborating. So yeah welcome to my house."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shola.me" />
        <meta
          property="og:title"
          content="House of Shola"
        />
        <meta
          property="og:description"
          content="Yahallo, Im Shola cheerful exciting, friendly frontend developer who likes learning new stuff and collaborating. So yeah welcome to my house."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_DOMAIN}/og-image.png`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta
          property="twitter:title"
          content="House of Shola"
        />
        <meta
          property="twitter:description"
          content="Yahallo, Im Shola cheerful exciting, friendly frontend developer who likes learning new stuff and collaborating. So yeah welcome to my house."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_DOMAIN}/og-image.png`}
        />
      </NextHead>
  )
}