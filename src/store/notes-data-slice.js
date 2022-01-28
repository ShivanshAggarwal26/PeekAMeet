import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notesListOne: [],
    pageVal: 1,
    hasMore: false,
    loadingNotes: false
};

const notesDataSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        setNotesData(state, action) {
            state.notesData = {
                ...action.payload
            };
        },
        deletingNote(state, action) {
            state.notesListOne = state.notesListOne.filter(item => item.noteKey !== action.payload);
        },
        setNotesListOne(state, action) {
            let s = new Set();
            action.payload.map(item => state.notesListOne.push(item));
            state.notesListOne.map(item => s.add(JSON.stringify(item)));
            state.notesListOne = [];
            let arr = Array.from(s);
            arr.map(item => state.notesListOne.push(JSON.parse(item)));
        },
        editingNote(state, action) {
            state.notesListOne = state.notesListOne.map(item =>
                item.noteKey === action.payload.noteKey ? action.payload.noteData : item);
        },
        setPageVal(state) {
            state.pageVal += 1;
        },
        addingNote(state) {
            state.pageVal = 1;
            state.notesListOne = [];
        },
        setHasMore(state, action) {
            state.hasMore = action.payload;
        },
        setLoadingNotes(state, action) {
            state.loadingNotes = action.payload;
        }
    }
})

export const notesDataActions = notesDataSlice.actions
export default notesDataSlice