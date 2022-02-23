import React from 'react'
import "react-tippy/dist/tippy.css";
import {Tooltip as ReactTippy, TooltipProps}from "react-tippy"

type Props = {
    children:React.ReactNode,
    tip:string,
} & TooltipProps

function Tooltip({children, tip, ...props}: Props) {
  return (
    <>
    <ReactTippy {...props} trigger='mouseenter' interactive html={
        <div className=''>
            {tip}
        </div>
    }>
        {children}
    </ReactTippy>
    </>
  )
}

export default Tooltip