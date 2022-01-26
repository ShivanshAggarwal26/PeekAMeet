import "./NotesCard.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteNoteData } from "../store/notes-actions"
import {useHistory} from "react-router"

const NotesCard = (props) => {
    const notesCard = props.note
    const noteText = notesCard.noteText
    const noteDate = notesCard.notesDateTime.notesDate
    const noteTime = notesCard.notesDateTime.notesTime + ", "
    const noteKey = notesCard.noteKey

    const [cardClick, setCardClick] = useState(false)

    const toggleCard = () => {
        setCardClick(!cardClick)
    }

    const dispatch = useDispatch()
    const history = useHistory()

    const deleteNoteClickHandler = () => {
        dispatch(deleteNoteData(noteKey))
    }

    const editNoteClickHandler = () => {
        history.push(`/edit-note/${noteKey}`)
    }

    console.log(typeof(noteText))

    const showNoteText = noteText.length > 40 ? noteText.substring(0, 40) + "..." : noteText
    
    return (
        <div className="notesCard">
            <div className="notesDataDiv">
                <span className="notesData" onClick={toggleCard}>
                    {cardClick ? noteText : showNoteText}
                </span>
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