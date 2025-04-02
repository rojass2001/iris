"use client"
import {  fetchdata, setquestion } from '@/store/Chatslice'
import { useState } from 'react'
import {MdArrowForward} from 'react-icons/md'
import { useDispatch, } from 'react-redux'
import Copyclipboard from './Copyclipboard'

function Input() {
    const [search,setsearch]=useState("")
    const dispatch=useDispatch()
    const send={
        "contents": [{
          "parts":[{"text":`${search}`}]
          }]
     }
        const submit=async(event)=>{
            event.preventDefault()
            dispatch(setquestion(search))
            dispatch(fetchdata(send)) 
        }
       
  return (
    <>
    <form className='w-[100%] flex bg-black rounded-full px-2  justify-between items-center' onSubmit={submit}>
      <input onChange={(e)=>setsearch(e.target.value)}  placeholder='ask your question' className={`w-full  flex items-center rounded-full bg-black p-1 outline-none pl-8
         h-[30px] md:h-[45px]  text-white`} value={search}/>
      <button  type='submit' ><MdArrowForward  className={`text-4xl animate-pulse  text-pink-600`}/></button>
     <Copyclipboard text='fhhhhhhhhhhh'/>
    </form> 
     </>
  )
}
export default Input
