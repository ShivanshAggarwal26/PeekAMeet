import { notesDataActions } from "./notes-data-slice"
import axios from "axios"
// import Main from "../layout/add-note/Main"
// import { MainSliceActions } from "./MainSlice"

export const addNoteData = (notesData) => {
    return async (dispatch) => {
        const addNote = async () => {
            // const response = await axios.post("https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs.json",
            //                                 notesData)
            const response = await axios.post("http://localhost:4000/posts", notesData)
            console.log(response)
        }

        try {
            await addNote()
            dispatch(notesDataActions.addingNote())
        } catch (error) {
            console.log("Error ----- " + error)
        }
    }
}

export const editNoteData = (notesData, editNoteKey) => {
    return async (dispatch) => {
        const editNote = async () => {
            // const url = "https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs/" + editNoteKey + ".json"
            const url = "http://localhost:4000/posts/" + editNoteKey
            const response = await axios.put(url, notesData)
            console.log("Response ..... " + response)
        }

        try {
            await editNote()
            const dateTime = convertDateTime(notesData.createdAt)
            const dateVal = notesData.createdAt.split("T")[0]
            const timeVal = notesData.createdAt.split("T")[1].split(".")[0]
            dispatch(notesDataActions.editingNote({
                noteKey: +editNoteKey,
                noteData: {
                    noteText: notesData.noteText,
                    notesDateTime: dateTime,
                    noteKey: +editNoteKey,
                    dateVal: dateVal,
                    timeVal: timeVal
                }
            }))
        } catch (error) {
            console.log("Put Error ..... " + error)
        }
    }
}

export const deleteNoteData = (deleteNoteKey) => {
    return async (dispatch) => {
        const deleteNote = async () => {
            console.log(deleteNoteKey)
            // const url = "https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs/" + deleteNoteKey + ".json"
            const url = "http://localhost:4000/posts/" + deleteNoteKey
            const response = await axios.delete(url)
            console.log("Response ..... " + response)
        }

        try {
            await deleteNote()
            dispatch(notesDataActions.deletingNote(deleteNoteKey))

        } catch (error) {
            console.log("Delete Error ...... " + error)
        }
    }
}

const convertDateTime = (d) => {
    const newDate = new Date(d)
    const month = newDate.toLocaleString('default', { month: 'short' })
    const date = newDate.getUTCDate()
    const notesDate = date + " " + month
    const hour = newDate.getUTCHours()
    const ampm = hour >= 12 ? "PM" : "AM"
    const minutes = newDate.getUTCMinutes()
    const notesTime = hour + ":" + minutes + " " + ampm
    return {
        notesDate: notesDate,
        notesTime: notesTime
    }
}

export const getNoteData = (page) => {
    return async (dispatch) => {
        const getNote = async () => {
            // const response = await axios.get("https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs.json")
            const response = await axios.get(`http://localhost:4000/posts?_page=${page}`)   
            console.log("Get Reponse ..... " + response)

            const docs = response.data

            const hasMoreVal = docs.length > 0

            dispatch(notesDataActions.setHasMore(hasMoreVal))

            const notesList = []

            // let j = 0
            for (let i in docs) {
                // if (j < page) {
                    // const dateTime = docs[i].createdAt;
                    const dateTime = docs[i].updatedAt;
                    const notesDateTime = convertDateTime(dateTime)
                    const dateVal = dateTime.split("T")[0]
                    const timeVal = dateTime.split("T")[1].split(".")[0]
                    notesList.push({
                        noteText: docs[i].noteText,
                        notesDateTime: notesDateTime,
                        noteKey: docs[i].id,
                        dateVal: dateVal,
                        timeVal: timeVal
                    })
                // }
                // j += 1
            }

            dispatch(notesDataActions.setNotesListOne(notesList))
        }

        try {
            await getNote()
            // dispatch(MainSliceActions.setLoadingNotes(false))
            dispatch(notesDataActions.setLoadingNotes(false))
        } catch (error) {
            console.log("Get Error ..... " + error)
        }
    }
}