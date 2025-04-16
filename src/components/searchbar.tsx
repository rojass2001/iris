"use client"
import {MdArrowForward} from 'react-icons/md'
import {  useSelector, } from 'react-redux'
import Copyclipboard from './Copyclipboard'
import {  Rootstate } from '@/store/store'
import useForm from '@/app/customhooks/useForm'

function Input() {
  const {handlechange,submit,search}=useForm()
  const { answer } = useSelector((state: Rootstate) => state.chat)

  return (
    <>
    <form className='w-[100%] flex bg-black rounded-full px-2  justify-between items-center' onSubmit={submit}>
      <input onChange={handlechange}  placeholder='ask your question' className={`w-full  flex items-center rounded-full bg-black p-1 outline-none pl-8
         h-[30px] md:h-[45px]  text-white`} value={search}/>
      <button  type='submit' ><MdArrowForward  className={`text-4xl animate-pulse  text-pink-600`}/></button>
        <Copyclipboard text={answer} />
    </form> 
     </>
  )
}
export default Input
