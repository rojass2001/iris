import React from 'react'
import {GridLoader, HashLoader} from 'react-spinners'
function Loader() {
  return (
    <div className='w-full flex items-center place-content-center'>
      <HashLoader size={60} color='blue'/>
    </div>
  )
}

export default Loader
