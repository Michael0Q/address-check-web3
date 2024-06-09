import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AppDisplay = 
| 'Home'
| 'Result'
| 'About'
| 'Price'
| 'Contact';

const initialState = {
    val : 'Home' as AppDisplay
}

const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        goHome: (state) => {
            state.val = 'Home'
        },
        goResult: (state) => {
            state.val = 'Result'
        },
        goAbout: (state) => {
            state.val = 'About'
        },
        goPrice: (state) => {
            state.val = 'Price'
        },
        goContact: (state) => {
            state.val = 'Contact'
        },
    }
})

export const {goHome, goAbout, goResult, goContact, goPrice} = displaySlice.actions;
export const displayVal = (state : RootState) => state.disable;
export default displaySlice.reducer;