import React from 'react'
function Header() {
  
  return (
<header className='w-full h-[70px]  fixed z-50 top-0 right-0 bottom-0 pb-1 
    bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500 '>
  <div className='w-full pl-3 flex items-center h-full  bg-black'>
       <div  className=' w-[120px] flex items-center place-content-center px-2 
        text-white bg-gradient-to-r from-pink-600 via-purple-500  to-pink-500 rounded-2xl'>
       <p className='text-5xl animate-pulse italic font-bold '>Iris</p> 
        </div>       
      </div>
</header>
  )
}

export default Header
