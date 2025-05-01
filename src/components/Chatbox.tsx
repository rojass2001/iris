"use client" // Required for components that use client-side hooks like useSelector

import Banner from './Banner' // Introductory message component
import Loader from './Loader' // Shows while content is loading
import Ansandquestiongrid from './Ansandquestiongrid' // Displays Q&A content
import { useSelector } from 'react-redux'
import { Rootstate } from '@/store/store' // Root type for Redux state
import Input from './searchbar' // Input field component for user queries
import Header from './Header' // Top navigation or branding component
import Box from './Box' // Wrapper component (likely a styled div)

function Chatbox() {
  // Access loading state from Redux store
  const { loading } = useSelector((state: Rootstate) => state.chat)

  return (
    <>
      <Header /> {/* Top header section */}

      <Box className='w-full mt-[80px]'> {/* Main content container with top margin to offset header */}
        <Banner /> {/* Static welcome message */}

        <Box>
          {/* Conditionally render Loader or Q&A content based on loading state */}
          {loading ? <Loader /> : <Ansandquestiongrid />}
        </Box>

        <Input /> {/* Input field at the bottom for user interaction */}
      </Box>
    </>
  )
}

export default Chatbox // Export the main chat interface component
