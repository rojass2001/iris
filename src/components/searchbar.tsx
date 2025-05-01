"use client" // Ensures the component is client-side (necessary for interactive elements in Next.js)

import { MdArrowForward } from 'react-icons/md' // Icon for submit button (right arrow)
import { useSelector } from 'react-redux' // Access Redux store
import Copyclipboard from './Copyclipboard' // Component to copy text to clipboard
import { Rootstate } from '@/store/store' // Type definition for Redux state
import useForm from '@/app/customhooks/useForm' // Custom hook for form handling (search input)
import Form from './Form' // Custom form component for consistent layout and functionality
import Newchat from './Newchat' // Button to clear search and start a new chat
import Box from './Box' // Custom box component for layout and styling
import Button from './Button' // Custom button component for actions

function Input() {
  // Destructure the form handling functions and state from the custom hook
  const { handlechange, submit, search, clearsearch } = useForm()

  // Access the answer from the Redux store
  const { answer } = useSelector((state: Rootstate) => state.chat)

  return (
    <>
      {/* Container box for the input area, styled with gradient and fixed positioning */}
      <Box className="w-full md:w-[95%] fixed left-0 right-0 bottom-1 md:bottom-2 md:left-7 md:right-7 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500">
        {/* Form component that handles input and submit actions */}
        <Form className="w-[100%] flex bg-black rounded-full px-2 relative justify-between items-center" onsubmit={submit}>
          {/* Textarea for user input */}
          <textarea
            value={search} // The current search value
            required
            onChange={handlechange} // Handle input change
            placeholder="ask your question" // Placeholder text for the input
            className={`w-full flex relative items-center place-content-center rounded-full bg-black resize-none p-2 outline-none pl-8 h-[30px] md:h-[45px] text-white`}
          />
          
          {/* Submit button with arrow icon */}
          <Button type="submit">
            <MdArrowForward className={`text-4xl animate-pulse text-pink-600`} />
          </Button>
          
          {/* Copy answer to clipboard functionality */}
          <Copyclipboard text={answer} />
        </Form>
      </Box>

      {/* Button to start a new chat and clear the search */}
      <Newchat clearsearch={clearsearch} />
    </>
  )
}

export default Input // Export the Input component for use in other parts of the app
