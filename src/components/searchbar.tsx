"use client"
import {MdArrowForward} from 'react-icons/md'
import {  useSelector, } from 'react-redux'
import Copyclipboard from './Copyclipboard'
import {  Rootstate } from '@/store/store'
import useForm from '@/app/customhooks/useForm'
import Form from './Form'
import Newchat from './Newchat'

function Input() {

  const { handlechange,submit,search,clearsearch}=useForm()
  const { answer } = useSelector((state: Rootstate) => state.chat)
  return (
  <>
   <div className='w-full md:w-[95%] fixed left-0 right-0 bottom-1 md:bottom-2 md:left-7 md:right-7 rounded-full 
        p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500'   >
     <Form className='w-[100%] flex bg-black rounded-full px-2  relative justify-between items-center' onsubmit={submit}>
        <textarea value={search} onChange={handlechange} placeholder='ask your question' className={`w-full  flex  relative items-center place-content-center rounded-full bg-black resize-none p-2 outline-none pl-8 h-[30px] md:h-[45px]  text-white`} />
        <button type='submit' ><MdArrowForward className={`text-4xl animate-pulse  text-pink-600`} /></button>
        <Copyclipboard text={answer} />
    </Form> 
   </div>
      <Newchat clearsearch={clearsearch} />
  </>
  )
}
export default Input
