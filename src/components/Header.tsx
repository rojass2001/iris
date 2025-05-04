import React from 'react'
import Box from './Box' // Custom wrapper component (likely for styling)
import Text from './Text' // Custom text component for typography abstraction

function Header() {
  return (
    <header className="w-full h-[70px] fixed z-50 top-0 right-0 bottom-0 pb-1 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500">
      {/* Main header container with full width, fixed position, and gradient background */}
      <Box className="w-full pl-3 flex items-center h-full bg-black">
        {/* Logo section: Custom Box with centered text */}
        <Box className="w-[120px] flex items-center place-content-center px-2 text-white bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500 rounded-2xl">
          {/* Company or app name with pulsing animation */}
          <Text className="text-5xl animate-pulse italic font-bold">Iris</Text>
        </Box>
      </Box>
    </header>
  )
}

export default Header // Export the header component for use in other parts of the app
