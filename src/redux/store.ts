import {configureStore} from '@reduxjs/toolkit'
import trnSlice from './slices/trnSlice'

const store = configureStore({
    reducer: {
        trnsaction: trnSlice
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export default store;