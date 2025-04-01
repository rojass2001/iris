import Header from './Header';
import Input from './Input';
import Banner from './Banner';
import Loader from './Loader';
import Ansandquestiongrid from './Ansandquestiongrid';
import { useSelector } from 'react-redux';
import { Rootstate } from '@/store/store';


function Chatbox() {
  const {loading}=useSelector((state:Rootstate)=>state.chat)
 return (
  <>
  <Header  />
<div className='w-full mt-[80px]  '>
  
   <Banner/>
    <>
  {loading?<Loader/>:<Ansandquestiongrid/>}
    </>
     <div className='w-full md:w-[95%] fixed left-0 right-0 bottom-1 md:bottom-2 md:left-7 md:right-7 rounded-full 
    p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500'   >
       <Input  /> 
      </div> 
</div>
    </> 
  );
}

export default Chatbox