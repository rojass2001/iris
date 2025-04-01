import { Rootstate } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
const gradient="bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500"
function Ansandquestiongrid() {
  const{question,answer}=useSelector((state:Rootstate)=>state.chat)
  return (
    <div className='w-full h-screen overflow-y-auto px-2  pb-[100px]'>
     <h3 className={`text-3xl mb-5 font-bold text-end font-sans  bg-clip-text text-transparent ${gradient}`}>{question}</h3>
    <div  className={`w-full text-xl italic font-bold bg-clip-text text-transparent ${gradient}`}>{answer}</div>
   </div>
  )
}

export default Ansandquestiongrid
