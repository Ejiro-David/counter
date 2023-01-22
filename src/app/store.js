//import and create store

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlices"


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})