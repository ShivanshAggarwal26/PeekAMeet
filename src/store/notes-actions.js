import { notesDataActions } from "./notes-data-slice"
import axios from "axios"

export const addNoteData = (notesData) => {
    return async () => {
        const addNote = async () => {
            const response = await axios.post("https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs.json",
                                            notesData)
            console.log(response)
        }

        try {
            await addNote()
        } catch (error) {
            console.log("Error ----- " + error)
        }
    }
}

export const editNoteData = (notesData, editNoteKey) => {
    return async (dispatch) => {
        const editNote = async () => {
            const url = "https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs/" + editNoteKey + ".json"
            const response = await axios.put(url, notesData)
            console.log("Response ..... " + response)
        }

        try {
            await editNote()
            const dateTime = convertDateTime(notesData.createdAt)
            dispatch(notesDataActions.editingNote({
                noteKey: editNoteKey,
                noteData: {
                    noteText: notesData.noteText,
                    notesDateTime: dateTime,
                    noteKey: editNoteKey
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
            const url = "https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs/" + deleteNoteKey + ".json"
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
            const response = await axios.get("https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs.json")
            console.log("Get Reponse ..... " + response)

            const docs = response.data

            const notesList = []

            let j = 0
            for (let i in docs) {
                if (j < page) {
                    const dateTime = docs[i].createdAt;
                    const notesDateTime = convertDateTime(dateTime)
                    const dateVal = dateTime.split("T")[0]
                    const timeVal = dateTime.split("T")[1].split(".")[0]
                    notesList.push({
                        noteText: docs[i].noteText,
                        notesDateTime: notesDateTime,
                        noteKey: i,
                        dateVal: dateVal,
                        timeVal: timeVal
                    })
                }
                j += 1
            }

            dispatch(notesDataActions.setNotesListOne(notesList))
        }

        try {
            await getNote()
        } catch (error) {
            console.log("Get Error ..... " + error)
        }
    }
}