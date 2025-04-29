"use client"
import { memo, ReactNode } from "react"
type box = { className?:string, children:ReactNode, onClick?:() => Promise<void> | void }

function Box({className,children,onClick}:box) {
  return (
    <div className={className} onClick={() => onClick && onClick()}>
      {children}
    </div>
  )
}

export default memo(Box)
