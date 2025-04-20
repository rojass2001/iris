"use client"
import React from 'react'
type form = {
    className: string,
    children: React.ReactNode,
    onsubmit: () => void
}

function Form({className,children,onsubmit}:form) {
  return (
    <form className={className} onSubmit={onsubmit}>
          {children}
    </form>
  )
}

export default Form
