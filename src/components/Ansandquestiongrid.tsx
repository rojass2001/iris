"use client"
import { Rootstate } from '@/store/store'
import React from 'react'
import { useSelector } from 'react-redux'
import Box from './Box'
import Text from './Text'
const gradient = "bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500"

function Ansandquestiongrid() {
  const { question, answer } = useSelector((state: Rootstate) => state.chat)
  return (
    <Box className='w-full h-screen overflow-y-auto px-2 italic  pb-[100px]'>
      <Text className={`text-3xl mb-5 font-bold font-sans  bg-clip-text text-transparent ${gradient}`}>{question}</Text>
      <Box className={`w-full text-2xl italic  bg-clip-text text-transparent ${gradient}`} >{answer}</Box>  
    </Box> 
  )
}

export default Ansandquestiongrid
