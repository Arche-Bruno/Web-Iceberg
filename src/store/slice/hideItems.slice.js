import { createSlice } from "@reduxjs/toolkit";

const hideSlice = createSlice({
    name:"hide",
    initialState:false,
    reducers:{
        setHideSlice:(currentValue,action)=> action.payload, 
    }

})

export const {setHideSlice} = hideSlice.actions;
export default hideSlice.reducer