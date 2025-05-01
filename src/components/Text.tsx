"use client" // Ensures the component runs on the client-side (necessary for interactive components in Next.js)

import React from 'react' // Import React for JSX support
import { memo } from 'react' // Memoize the component to avoid unnecessary re-renders

// Define the props Type for the Text component
type TextProps = {
  children: React.ReactNode // Content to be rendered inside the <p> tag
  className?: string // Optional className for styling
}

function Text({ children, className }: TextProps) {
  return (
    // Render the children content inside a <p> tag with optional className for styling
    <p className={className}>
      {children}
    </p>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Text)
