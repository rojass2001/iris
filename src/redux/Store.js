import { configureStore } from "@reduxjs/toolkit";
import chatslice from './Chatslice'
const Store=configureStore({
    reducer:{
    chat:chatslice,

    }
});
export default Store