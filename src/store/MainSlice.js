import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    pageVal: 5,
    loadingNotes: false
}

const MainSlice = createSlice({
    name: "mainSlice",
    initialState: initialState,
    reducers: {
        setLogin(state, action) {
            state.isLogin = action.payload;
        },
        setPageVal(state) {
            state.pageVal += 5;
        },
        setLoadingNotes(state, action) {
            state.loadingNotes = action.payload;
        }
    }
})

export const MainSliceActions = MainSlice.actions
export default MainSlice