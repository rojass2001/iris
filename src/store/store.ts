import { configureStore } from "@reduxjs/toolkit";
import Chatslice from './Chatslice';

export default function makeStore(){
return configureStore({
    reducer:{
        chat:Chatslice
    }
})}
export const store=makeStore()
export type Rootstate=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
