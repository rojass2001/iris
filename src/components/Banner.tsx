"use client"
const gradient = "bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500"

function Banner() {
  return (
    <div className='w-full'>
      <p className={`text-4xl  font-bold  animate-pulse bg-clip-text text-transparent ${gradient}`}>Hi I am Iris.</p>
      <p className={`text-3xl mt-7 mb-6 font-bold animate-bounce bg-clip-text text-transparent ${gradient}`}>Hello! How can I help you today?</p>
    </div>
  )
}

export default Banner
