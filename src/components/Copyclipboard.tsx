"use client"
import React, { memo,  } from 'react'
import copy from 'clipboard-copy';
import { IoMdCopy } from 'react-icons/io';
import { toast } from 'react-toastify';
import Box from './Box';

function Copyclipboard({text}:{text:string}) {
    
    const  handleCopyClick=async():Promise<void> => {
        try {
          await copy(text);
          toast.success('Text copied to clipboard!');
          
        } catch (error) {
          console.error('Failed to copy text to clipboard', error);
        }
      };
  return (
    <Box onClick={handleCopyClick}className='rounded-full text-white'>
       <IoMdCopy className='bg-gradient-to-r rounded-full  text-3xl from-pink-600 via-purple-500 to-pink-500'/>
    </Box>
  )
}
export default memo(Copyclipboard)
