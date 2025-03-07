import { MdArrowForward } from 'react-icons/md'
import { useDispatch, } from 'react-redux'
import {fetchdata,change} from '../redux/Chatslice'
function Input() {

  const dispatch=useDispatch()
  {/* change input values */}
  const changeinput=(event)=>{
    //let data=event.target.value;
    dispatch(change(event.target.value))
  }
 const submit=(e)=>{
  e.preventDefault()
  dispatch(fetchdata())
 }
  return (
    
       <form className='w-[100%] flex bg-black rounded-full px-2  justify-between items-center' onSubmit={submit}>
       
           <input  onChange={changeinput} placeholder='ask your question' 
           className={`w-full  flex items-center rounded-full bg-black p-1 outline-none pl-8
         h-[30px] md:h-[45px]  text-white`}/>
          <button type='submit' ><MdArrowForward  className={`text-4xl animate-pulse  text-pink-600`}/></button>
         
          </form>
   
  )
}
export default Input
