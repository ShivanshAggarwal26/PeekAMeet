import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./MainSlice";

const store = configureStore({
    reducer: {
        mainState: MainSlice.reducer
    }
})

export default store