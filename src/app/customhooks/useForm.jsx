"use client"
import { clearchat, fetchdata, setquestion } from '@/store/Chatslice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function useForm() {
  const dispatch = useDispatch()
  const [search,setsearch]=useState("")
  
   const send={
        "contents": [{
          "parts":[{"text":`${search}`}]
          }]
  }
  
    const submit = async(event) => {
         event.preventDefault()
        dispatch(setquestion(search))
        dispatch(fetchdata(send))
  }
  
  const handlechange = (e) => {
    setsearch(e.target.value)
  }
  const clearsearch = () => {
    dispatch(clearchat())
    setsearch("")
  }
  return {submit,handlechange,search,clearsearch}
}

export default useForm
