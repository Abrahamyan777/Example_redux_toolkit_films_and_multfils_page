import {configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./slices/slice"

export default configureStore({
    reducer: {
        filmsReducer
    }
})