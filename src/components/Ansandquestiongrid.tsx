"use client" //  client components in Next.js App Router

import { Rootstate } from '@/store/store' // 
import React from 'react'
import { useSelector } from 'react-redux'
import Box from './Box'
import Text from './Text'
import Copyclipboard from './Copyclipboard'

//  This gradient is reusable, but you could move it to a constants/styles file if reused often
const gradient = "bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500"

function Ansandquestiongrid() {
  const { question, answer } = useSelector((state: Rootstate) => state.chat)

  return (
    <Box className='w-full h-screen overflow-y-auto px-2 italic pb-[100px]'>
      {/*  Consider wrapping this in a conditional if `question` might be empty */}
      <Text className={`text-3xl mb-5 font-bold font-sans bg-clip-text text-transparent ${gradient}`}>
        {question}
      </Text>
      {/* if answer length greaterthan0 display copy clipboard */}
      {answer.length > 0 &&
        <Box className='w-full py-2 place-items-end'>
          <Copyclipboard text={answer} />
        </Box>
      }
      {/* This can be further split into a component like <Answer />  */}
      <Box className={`w-full text-2xl italic bg-clip-text text-transparent ${gradient}`}>
        {answer}
      </Box>
    </Box>
  )
}

export default Ansandquestiongrid 
