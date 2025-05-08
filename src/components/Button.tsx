"use client" // Required for client-side interactivity in Next.js App Router

import React, { memo } from 'react'

// Define the props for the Button component
type ButtonProps = {
  onClick?: () => Promise<void> | void // Optional click handler (can be async)
  children: React.ReactNode            // Content inside the button (usually text or elements)
  className?: string                   // Optional CSS classes (e.g., Tailwind, custom styles)
  type?: "submit" | "reset" | "button" // Button behavior type
}

// Functional Button component
function Button({ onClick, children, className, type }: ButtonProps) {
  return (
    <button
      type={type} // Defaults to "submit" if not specified
      className={className}
      onClick={() => onClick && onClick()} // Defensive check before invoking
    >
      {children}
    </button>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Button)
