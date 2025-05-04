import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" // Import necessary Redux Toolkit methods
import axios from "axios" // Import Axios for HTTP requests

// Define the initial state structure for the chat slice
type StateTypes = {
  answer: string, // The response text (answer) from the API
  loading: boolean, // Indicates if the request is in progress
  question: string // The question asked by the user
}

// Define the asynchronous action to fetch data from the API
export const fetchdata = createAsyncThunk("chat/fetchdata", async (search: string) => {
  // Make a POST request to the API with the search term
  const res = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAowVnzFyydc9A-r168HJ-uoyaYiVPYqmU", search); 
  // Return the answer from the API response
  return res.data.candidates[0].content.parts[0].text
});

// Define the initial state for the chat slice
const INITIAL_STATE: StateTypes = {
  answer: "",
  loading: false,
  question: ""
};

// Create the chat slice with reducers and async actions
const chatSlice = createSlice({
  name: "chat", // Slice name (used to identify the slice)
  initialState: INITIAL_STATE, // Initial state for the slice
  reducers: {
    // Reducer to set the question
    setquestion: (state, action) => {
      state.question = action.payload; // Set the question in the state
    },
    // Reducer to clear the chat state
    clearchat: (state) => {
      state.loading = false; // Reset loading state
      state.question = ""; // Clear the question
      state.answer = ""; // Clear the answer
    }
  },
  extraReducers: (builder) => {
    // Handle different states of the async fetchdata action
    builder.addCase(fetchdata.pending, (state) => {
      state.loading = true;   // Set loading to true when the request is pending
      console.log("pending");  // Log the pending state
    });
    builder.addCase(fetchdata.fulfilled, (state, action) => {
      console.log("success");   // Log success when the request is fulfilled
      state.answer = action.payload;  // Set the answer in the state
      state.loading = false;  // Set loading to false when the request is successful
    });
    builder.addCase(fetchdata.rejected, () => {
      console.log("rejected"); // Log rejection if the request fails
    });
  }
});

// Export actions for use in components
export const { setquestion, clearchat } = chatSlice.actions;

// Export the reducer to be added to the store
export default chatSlice.reducer;
