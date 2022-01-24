import axios from "axios"
import {useEffect} from "react"
import { useSelector } from "react-redux";

const DeleteNote = (props) => {
    console.log("Hello World")
    // const deleteNoteKey = useSelector((state) => {
    //     return state.notes.deleteNoteKey
    // })
    const deleteNoteKey = props.deleteNoteKey
    console.log(deleteNoteKey)
    const deleteNote = async () => {
        console.log(deleteNoteKey)
        try {
            const url = "https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs/" + deleteNoteKey + ".json"
            const response = await axios.delete(url)
            console.log("Response ..... " + response)
        } catch (error) {
            console.log("Error ..... " + error)
        }
    }

    useEffect(() => {
        deleteNote()
    }, [deleteNoteKey])

    return (
        deleteNoteKey
    )
}

export default DeleteNote