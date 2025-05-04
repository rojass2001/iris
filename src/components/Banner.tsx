"use client" // Indicates this component is a client component in Next.js
import Box from "./Box" // Wrapper component, likely adds consistent layout/styling
import Text from "./Text" // Custom text component for typography abstraction
import { memo } from 'react';

// Define gradient once for reuse across components
const gradient = "bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500"

function Banner() {
  return (
    <Box className="w-full"> {/* Full-width container */}
      
      {/* Intro text with pulse animation for attention */}
      <Text className={`text-4xl font-bold animate-pulse bg-clip-text text-transparent ${gradient}`}>
        Hi I am Iris.
      </Text>

      {/* Follow-up message with bounce animation to guide user */}
      <Text className={`text-3xl mt-7 mb-6 font-bold animate-bounce bg-clip-text text-transparent ${gradient}`}>
        Hello! How can I help you today?
      </Text>

    </Box>
  )
}

export default memo(Banner) // Exporting the component for use in other parts of the app
