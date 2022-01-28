import { configureStore } from "@reduxjs/toolkit";
import notesDataSlice from "./notes-data-slice";

const store = configureStore({
    reducer: {
        notes: notesDataSlice.reducer
    }
})

export default store