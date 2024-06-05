import {PayloadAction, createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { APIresult, Transaction, TransactionMap } from '../../context/type/Web3TypeOf';
import { RootState } from '../store';
import { getListTransactions } from '../../utils/web3Utils';
import { sumpleTrn } from '../../context/data/Database';

const initialState = {
    trn: sumpleTrn
}

export const renewTrn = createAsyncThunk(
    'transaction/renewTrn',
    async (address : string) => {
        const result : Transaction[] = await getListTransactions(address);
        const map = new Map<string, number>();
        result.map((e, index) => {
            const key = e.from === address ? e.to : e.from;
            const txValue : number = Number.parseInt(e.value) / 1e18;
            if(map.has(key)){
                map.set(key, txValue + (map.get(key) as number));
            }else{
                map.set(key, txValue);
            }
    });
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
            state.trn.push(action.payload);
        });
    }
});


//     
//     dispatch(renewTrn(map));
// }
// }

export const {delTrn} = trnSlice.actions
export const trnVal = (state: RootState) => state.trnsaction
export default trnSlice.reducer