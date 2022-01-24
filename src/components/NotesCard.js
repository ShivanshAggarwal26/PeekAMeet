import "./NotesCard.css"
import { notesDataActions } from "../store/notes-data-slice"
import { useDispatch } from "react-redux"
import DeleteNote from "../views/DeleteNote"
import { deleteNoteData } from "../store/notes-actions"
import {useHistory} from "react-router"

const NotesCard = (props) => {
    const notesCard = props.note
    const noteText = notesCard.noteText
    const noteDate = notesCard.notesDateTime.notesDate
    const noteTime = notesCard.notesDateTime.notesTime + ", "
    const noteKey = notesCard.noteKey

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteNoteClickHandler = () => {
        console.log("Hello")
        // dispatch(notesDataActions.setDeleteNoteKey(noteKey))
        // const deleteNoteReturnValue = <DeleteNote deleteNoteKey={noteKey}/>
        dispatch(deleteNoteData(noteKey))
        // console.log(deleteNoteReturnValue)
    }

    const editNoteClickHandler = () => {
        history.push(`/edit-note/${noteKey}`)
    }
    
    return (
        <div className="notesCard">
            <div className="notesDataDiv">
                <span className="notesData">{noteText}</span>
                <div className="editDeleteDiv">
                    <span className="dropdownBtn">...</span>
                    <div className="dropdown-content">
                        <span onClick={editNoteClickHandler}>Edit</span>
                        <span onClick={deleteNoteClickHandler}>Delete</span>
                    </div>
                </div>
            </div>
            <div className="notesDateTime">
                <span>{noteTime}</span>
                <span>{noteDate}</span>
            </div>
        </div>
    )
}

export default NotesCard