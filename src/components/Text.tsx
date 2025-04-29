"use client"
import React from 'react'
import { memo } from 'react';
type text = { children: React.ReactNode, className?: string }

function Text({children,className}:text) {
    return (
      <>
       <p className={className}>{children}</p>
      </>
  )
}

export default memo(Text)
