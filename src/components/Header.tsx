"use client"
import React from 'react'
import Box from './Box'
import Text from './Text'
function Header() {
  
  return (
   <header className='w-full h-[70px]  fixed z-50 top-0 right-0 bottom-0 pb-1 bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500 '>
     <Box className='w-full pl-3 flex items-center h-full  bg-black'>
       <Box  className=' w-[120px] flex items-center place-content-center px-2 text-white bg-gradient-to-r from-pink-600 via-purple-500  to-pink-500 rounded-2xl'>
         <Text className='text-5xl animate-pulse italic font-bold '>Iris</Text> 
        </Box>       
    </Box>
   </header>
  )
}

export default Header
