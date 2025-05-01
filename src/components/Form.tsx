"use client" // Ensures this component runs client-side (necessary for interactive forms in Next.js)

import React from 'react'

// Define the props for the Form component
type FormProps = {
  className: string // CSS classes for styling the form
  children: React.ReactNode // Form content (e.g., input fields, buttons)
  onsubmit: () => void // Submit handler function
}

function Form({ className, children, onsubmit }: FormProps) {
  return (
    // Basic form element with customizable className and submit handler
    <form className={className} onSubmit={onsubmit}>
      {children} {/* Render form children (inputs, buttons, etc.) */}
    </form>
  )
}

export default Form // Export the Form component for use in other parts of the app
