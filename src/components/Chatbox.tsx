"use client"
import Banner from './Banner';
import Loader from './Loader';
import Ansandquestiongrid from './Ansandquestiongrid';
import { useSelector } from 'react-redux';
import { Rootstate } from '@/store/store';
import Input from './searchbar';
import Header from './Header';

function Chatbox() {
   const {loading}=useSelector((state:Rootstate)=>state.chat)
 return (
 <>
   <Header/>
   <div className='w-full mt-[80px]  '>
     <Banner />
      <div>
         {loading?<Loader/>:<Ansandquestiongrid/>}
      </div>
      <Input/>
   </div>
 </> 
  );
}

export default Chatbox