import {PayloadAction, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { APIresult, Transaction, TransactionMap } from '../../context/type/Web3TypeOf';
import { RootState } from '../store';
import { getListTransactions } from '../../utils/web3Utils';
import { sumpleTrn } from '../../context/data/Database';
import { onDisable, unDisable } from './disabledSlice';


const initialState = {
    val: [] as TransactionMap[]
}

export const renewTrn = createAsyncThunk(
    'transaction/renewTrn',
    async (address : string, {dispatch}) => {
        dispatch(onDisable());
        const APIresult : Transaction[] = await getListTransactions(address);
        let result : Transaction[] = [] 
        for(let i = 0; i < 10; i++){ 
            result.push(APIresult[i]);
            if(i == 10) break;
        }

        const map = new Map<string, number>();
        result.map((e, index) => {
            const key = e.from === address ? e.to : e.from;
            const txValue : number = Number.parseInt(e.value) / 1e18;
            if(map.has(key)){
                map.set(key, txValue + (map.get(key) as number));
            }else{
                map.set(key, txValue);
            }
            if (index == 10){}
        });
        dispatch(unDisable());
        return new Map([...map].sort((a, b) => b[1] - a[1]));
    }
);

const trnSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        delTrn: (state) => {
            
        }
    },
    extraReducers: builder => {
        builder.addCase(renewTrn.fulfilled, (state, action: PayloadAction<TransactionMap>) => {
            state.val.push(action.payload);
        })
    }
});

export const {delTrn} = trnSlice.actions
export const trnVal = (state: RootState) => state.trnsaction
export default trnSlice.reducer