import {configureStore} from "@reduxjs/toolkit"
import arrowStatusReducer from "../features/arrowStatusReducer"
const store = configureStore({
    reducer: arrowStatusReducer
})

export default store