import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Plan = 
'Free'
|'Personal'
|'Business'

const initialState = {
    val: 'Free' as Plan
}

const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers:{
        setPlan: (state) => {

        }
    }
})

export const {setPlan} = planSlice.actions;
export const planVal = (state: RootState) => state.plan
export default planSlice.reducer 