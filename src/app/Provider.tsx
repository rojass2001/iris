"use client" // Marks this file as a Client Component (required for using hooks, Redux, etc. in Next.js App Router)

import { store } from "@/store/store"; // Importing the Redux store from your app's store configuration
import React from "react"; // Importing React to use JSX and types
import { Provider } from "react-redux"; // Importing Redux's Provider to connect React with the Redux store

// A wrapper component that provides the Redux store to the entire React component tree
export default function Providers({ children }: { children: React.ReactNode }) {

    return <Provider store={store}>{children}</Provider>
}
