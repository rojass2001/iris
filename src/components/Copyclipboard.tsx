"use client" // Ensures the component is client-side for interaction (Next.js App Router)

import React, { memo } from 'react' // Importing React and memo to prevent unnecessary re-renders
import copy from 'clipboard-copy' // Utility for copying text to the clipboard
import { IoMdCopy } from 'react-icons/io' // Icon component for copying
import { toast } from 'react-toastify' // For displaying success/error messages
import Box from './Box' // Custom Box component, likely a styled wrapper

// Define the props type for the Copyclipboard component
function Copyclipboard({ text }: { text: string }) {

  // Handle click event for copying text to clipboard
  const handleCopyClick = async (): Promise<void> => {
    try {
      // Attempt to copy the provided text to the clipboard
      await copy(text)
      // Notify user of success
      toast.success('Text copied to clipboard!')
    } catch (error) {
      // Handle any errors that occur during the copy process
      console.error('Failed to copy text to clipboard', error)
    }
  }

  return (
    <Box onClick={handleCopyClick} className="rounded-full text-pink-500">
      {/* Render the copy icon inside a Box component */}
      <IoMdCopy className="text-3xl" />
    </Box>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Copyclipboard)
