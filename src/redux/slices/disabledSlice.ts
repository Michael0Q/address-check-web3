import {PayloadAction, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { RootState } from '../store';


const initialState = {
    val: false
}

const disabledSlice = createSlice({
    name: 'disabled',
    initialState,
    reducers: {
        onDisable: (state) => {
            state.val = true
        },
        unDisable: (state) => {
            state.val = false
        }
    },
});


export const {onDisable, unDisable} = disabledSlice.actions
export const disableVal = (state: RootState) => state.disable
export default disabledSlice.reducer