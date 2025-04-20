"use client"

 function Newchat({clearsearch}:{clearsearch:()=>void}) {
        return (
        <button onClick={clearsearch} className='p-2 animate-bounce bg-gradient-to-r from-pink-600 via-purple-500 
            to-pink-500  text-white fixed bottom-[100px] right-10 rounded-2xl z-50'>
            new chat
        </button>
    )
  }

export default Newchat
