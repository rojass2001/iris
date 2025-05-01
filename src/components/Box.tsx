"use client" // Enables this component to run in the browser (Next.js App Router)

import { memo, ReactNode } from "react"

// Define the props for the Box component
type box = {
  className?: string // Optional CSS classes (e.g., Tailwind or custom)
  children: ReactNode // Content to be rendered inside the box
  onClick?: () => Promise<void> | void // Optional click handler (can be async)
}

// Functional Box component
function Box({ className, children, onClick }: box) {
  return (
    // Render a div with optional styling and click functionality
    <div className={className} onClick={() => onClick && onClick()}>
      {children}
    </div>
  )
}

// Memoize to avoid unnecessary re-renders when props don't change
export default memo(Box)
