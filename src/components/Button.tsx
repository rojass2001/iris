"use client"
import React, { memo } from 'react'

type button = {
    onClick ?: () => Promise<void> | void,
    children:React.ReactNode,
    className?: string,
    type ?: "submit" | "reset" | "button"
}
function Button({ onClick, children, className,type }:button ) {
  return (
      <button type={type} className={className} onClick={() => onClick && onClick()}>
      {children}
    </button>
  )
}

export default memo(Button)
