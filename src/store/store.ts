"use client" // Ensures this store setup is used on the client-side in Next.js

import { configureStore } from "@reduxjs/toolkit" // Import configureStore to create the Redux store
import Chatslice from './Chatslice' // Import the chat slice reducer

// Function to create and configure the Redux store
export default function makeStore() {
  return configureStore({
    reducer: {
      chat: Chatslice // Adding the chat slice to the store under the "chat" key
    }
  })
}

// Create the store instance using the makeStore function
export const store = makeStore()

// Type definition for the state of the Redux store (used for type-checking)
export type Rootstate = ReturnType<typeof store.getState> 

// Type definition for dispatch actions (used for type-checking dispatched actions)
export type AppDispatch = typeof store.dispatch 
