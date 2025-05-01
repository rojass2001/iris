"use client" // Ensures this component runs on the client-side (necessary for interactive elements in Next.js)

import Button from "./Button" // Importing the reusable Button component
import { memo } from 'react';

// Define the props for the Newchat component
function Newchat({ clearsearch }: { clearsearch: () => void }) {
  return (
    // Button that triggers the clearsearch function when clicked
    <Button
      onClick={clearsearch} // Calls the provided clearsearch function
      className="p-2 animate-bounce bg-gradient-to-r from-pink-600 via-purple-500 to-pink-500 text-white fixed bottom-[100px] right-10 rounded-2xl z-50"
    >
      new chat {/* Button label */}
    </Button>
  )
}

export default memo(Newchat) // Export the Newchat component for use in other parts of the app
