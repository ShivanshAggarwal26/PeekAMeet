import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    notesData: {},
    deleteNoteKey: "",
    notesListOne: []
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
            state.notesListOne = action.payload
            console.log(state.notesListOne)
        },
        editingNote(state, action) {
            state.notesListOne = state.notesListOne.map(item =>
                item.noteKey === action.payload.noteKey ? action.payload.noteData : item)
        }
    }
})

export const notesDataActions = notesDataSlice.actions
export default notesDataSlice