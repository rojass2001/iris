"use client"
import { PulseLoader } from 'react-spinners'
import Box from './Box'

function Loader() {
  return (
    <Box className='w-full flex items-center place-content-center'>
       <PulseLoader size={15} color='#FF00FF'/>
    </Box>
  )
}
export default Loader
