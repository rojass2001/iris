import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
let senddata={
  "contents": [{
    "parts":[{"text":""}]
    }]
   }
export const change=(search)=>{
  senddata.contents[0].parts[0].text=search;
  console.log(senddata)
  }
export const fetchdata=createAsyncThunk("chat/fetchdata",async()=>{
    const res=await  axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAowVnzFyydc9A-r168HJ-uoyaYiVPYqmU",senddata);
    return res.data.candidates[0].content.parts[0].text 
});
const INITIAL_STATE={
    answer:"",
    loading:false,
    question:""
};
const chatslice=createSlice({
    name:"chat",
    initialState:INITIAL_STATE,
    reducers:{
  setanswer:(state,action)=>{
    state.answer= action.payload;   
  }
    },
    extraReducers:(builder)=>{
      builder.addCase(fetchdata.pending,(state,action)=>{
       state.loading=true
      console.log("pending",action.payload)
      });
      builder.addCase(fetchdata.fulfilled,(state,action)=>{
        console.log("success")
        state.answer=action.payload;
        state.question=senddata.contents[0].parts[0].text;
        state.loading=false;
       });
       builder.addCase(fetchdata.rejected,(state,action)=>{
        console.log("rejected",action.payload)
       });
    
    }
})
export const{setanswer}=chatslice.actions
export default chatslice.reducer