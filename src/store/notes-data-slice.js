import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notesData: {},
    deleteNoteKey: "",
    notesListOne: [],
    pageVal: 1,
    hasMore: false
}

const notesDataSlice = createSlice({
    name: "notes",
    initialState: initialState,
    reducers: {
        setNotesData(state, action) {
            state.notesData = {
                ...action.payload
            }
        },
        setDeleteNoteKey(state, action) {
            console.log(state.deleteNoteKey)
            state.deleteNoteKey = action.payload
        },
        deletingNote(state, action) {
            state.notesListOne = state.notesListOne.filter(item => item.noteKey !== action.payload)
        },
        setNotesListOne(state, action) {
            // state.notesListOne = action.payload
            // state.notesListOne = [...state.notesListOne, ...action.payload]
            let s = new Set();
            action.payload.map(item => state.notesListOne.push(item));
            state.notesListOne.map(item => s.add(JSON.stringify(item)));
            state.notesListOne = [];
            let arr = Array.from(s);
            arr.map(item => state.notesListOne.push(JSON.parse(item)));
            // console.log(state.notesListOne);

            // action.payload.map(item => state.notesListOne.push(item))
        },
        editingNote(state, action) {
            // console.log(state.notesListOne)
            state.notesListOne = state.notesListOne.map(item =>
                item.noteKey === action.payload.noteKey ? action.payload.noteData : item)
            // console.log(state.notesListOne)
            // state.pageVal = 1
            // state.notesListOne = []
        },
        setPageVal(state) {
            state.pageVal += 1;
        },
        addingNote(state) {
            state.pageVal = 1
            state.notesListOne = []
        },
        setHasMore(state, action) {
            state.hasMore = action.payload
        }
    }
})

export const notesDataActions = notesDataSlice.actions
export default notesDataSlice