import {configureStore} from '@reduxjs/toolkit'
import trnSlice from './slices/trnSlice'
import disabledSlice from './slices/disabledSlice'
import displaySlice from './slices/displaySlice'
import planSlice from './slices/planSlice'

const store = configureStore({
    reducer: {
        trnsaction: trnSlice,
        disable: disabledSlice,
        display: displaySlice,
        plan: planSlice,
    },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export default store;