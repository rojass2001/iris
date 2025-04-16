import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit"
import axios from "axios";

type statetypes={
  answer:string,
  loading:boolean,
  question?:string
 
};


export const fetchdata=createAsyncThunk("chat/fetchdata",async(search)=>{
    const res=await  axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAowVnzFyydc9A-r168HJ-uoyaYiVPYqmU",search);
    return res.data.candidates[0].content.parts[0].text 
});
const INITIAL_STATE:statetypes={
    answer:"",
    loading:false,
   question:""
};
const chatslice=createSlice({
    name:"chat",
    initialState:INITIAL_STATE,
    reducers:{
   setquestion:(state,action)=>{
    state.question= action.payload;   
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
        console.log(action.payload)
        state.loading=false;
       });
       builder.addCase(fetchdata.rejected,(state,action)=>{
        console.log("rejected",action.payload)
       });
    
    }
})
export const{setquestion}=chatslice.actions
export default chatslice.reducer