"use client"
import Box from "./Box"
import Text from "./Text"
const gradient = "bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500"

function Banner() {
  return (
    <Box className='w-full'>
      <Text className={`text-4xl  font-bold  animate-pulse bg-clip-text text-transparent ${gradient}`}>Hi I am Iris.</Text>
      <Text className={`text-3xl mt-7 mb-6 font-bold animate-bounce bg-clip-text text-transparent ${gradient}`}>Hello! How can I help you today?</Text>
    </Box>
  )
}

export default Banner
