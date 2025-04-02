/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useState } from 'react'
import copy from 'clipboard-copy';
import { IoMdCopy } from 'react-icons/io';
function Copyclipboard({text}:{text:string}) {
    const [copied, setCopied] = useState<boolean>(false);
   
    const  handleCopyClick=async():Promise<void> => {
        try {
          await copy(text);
          setCopied(true);
        } catch (error) {
          console.error('Failed to copy text to clipboard', error);
        }
      };
  return (
    <span onClick={handleCopyClick}className={` rounded-full text-white`}>
       <IoMdCopy className='bg-gradient-to-r rounded-full  text-3xl from-pink-600 via-purple-500 to-pink-500'/>
    </span>
  )
}
export default memo(Copyclipboard)
