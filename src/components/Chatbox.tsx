"use client"
import Banner from './Banner';
import Loader from './Loader';
import Ansandquestiongrid from './Ansandquestiongrid';
import { useSelector } from 'react-redux';
import { Rootstate } from '@/store/store';
import Input from './searchbar';
import Header from './Header';
import Box from './Box';

function Chatbox() {
   const {loading}=useSelector((state:Rootstate)=>state.chat)
 return (
 <>
   <Header/>
   <Box className='w-full mt-[80px]  '>
     <Banner />
     <Box>
         {loading?<Loader/>:<Ansandquestiongrid/>}
     </Box>
     <Input/>
   </Box>
 </> 
  );
}

export default Chatbox