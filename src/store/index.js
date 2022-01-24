import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./MainSlice";
import notesDataSlice from "./notes-data-slice";

const store = configureStore({
    reducer: {
        mainState: MainSlice.reducer,
        notes: notesDataSlice.reducer
    }
})

export default store