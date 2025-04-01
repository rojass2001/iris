import { Rootstate } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
const gradient=" bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500 "
function Ansandquestiongrid() {
  const{question,answer}=useSelector((state:Rootstate)=>state.chat)
  return (
    <div className='w-full h-screen overflow-y-auto pl-3 pr-4 pb-[100px] '>
    <p className={`text-4xl mb-5 font-bold  text-end italic bg-clip-text text-transparent${gradient}`}>{question}</p>
    <div  className={`w-full text-xl italic font-bold bg-clip-text text-transparent${gradient}`}>{answer}</div>
   </div>
  )
}

export default Ansandquestiongrid
