import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../feature/rootSlice'

export const store = configureStore({
    reducer: rootReducer
})