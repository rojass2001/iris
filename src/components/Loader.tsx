"use client" // Ensures the component is rendered on the client-side in Next.js App Router

import { PulseLoader } from 'react-spinners' // Importing the PulseLoader spinner from react-spinners
import Box from './Box' // Custom Box component used for layout and styling

function Loader() {
  return (
    // Container Box that centers the loader
    <Box className='w-full flex items-center place-content-center'>
      {/* PulseLoader with custom size and color for loading state */}
      <PulseLoader size={15} color='#FF00FF' />
    </Box>
  )
}

export default Loader // Export the Loader component to be used in other parts of the app
