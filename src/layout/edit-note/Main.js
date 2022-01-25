import "./Main.css";
import MainContext from "../../context/MainContext";
import { useContext, useState } from "react";
import response from "../../files/response";
import { useSelector, useDispatch } from "react-redux";
import { editNoteData } from "../../store/notes-actions"
import {useHistory} from "react-router-dom"

const Main = (props) => {
    // const ctx = useContext(MainContext);
    // const response = ctx.response;
    const data = response.data[0].customer;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const userName = firstName + " " + lastName;

    const noteKey = props.noteKey

    const history = useHistory()

    const notesListOne = useSelector((state) => {
        return state.notes.notesListOne
    })

    const notesData = notesListOne.filter(note => note.noteKey === noteKey)

    const noteTextVal = notesData.length > 0 ? notesData[0].noteText : ""

    const [editFormData, setEditFormData] = useState({
        dateVal: "",
        timeVal: "",
        noteTextVal: noteTextVal
    })

    const dispatch = useDispatch()

    const editNoteClickHandler = () => {
        const dateTime = editFormData.dateVal + "T" + editFormData.timeVal + ".202Z"

        const obj = {
            "createdFor": "5de9d89c64b57f3acc326725",
            "noteText": editFormData.noteTextVal,
            "type": "followup",
            "createdBy": "5de9d89c64b57f3acc326724",
            "createdAt": dateTime,
            "updatedAt": "2019-12-16T10:17:23.717Z",
            "id": "5df7542a38ebb518325d87e7"
        }

        dispatch(editNoteData(obj, noteKey))
        history.replace("/notes")
    }

    const dateChangeHandler = (event) => {

        setEditFormData({
            ...editFormData,
            dateVal: event.target.value
        })
    }

    const timeChangeHandler = (event) => {
        setEditFormData({
            ...editFormData,
            timeVal: event.target.value
        })
    }

    const noteTextChangeHandler = (event) => {
        setEditFormData({
            ...editFormData,
            noteTextVal: event.target.value
        })
    }

    return (
        <div className="main-notes">

            <div className="editNoteHeaderDiv">
                <span className="Edit-Note">
                    Edit Note
                </span>
            </div>

            <div className="nameDiv">
                <span className="nameSpan">{userName}</span>
            </div>

            <div className="dateTimeInputDiv">
                <div className="dateInputDiv">
                    <span className="Follow-Up-Date">
                        Follow Up Date
                    </span>
                    <input className="inputDateClass" type="date" 
                            onChange={dateChangeHandler} value={editFormData.dateVal}></input>
                </div>

                <div className="timeInputDiv">
                    <span className="time">
                        Time
                    </span>
                    <input className="timeInputClass" type="time" 
                            onChange={timeChangeHandler} value={editFormData.timeVal}></input>
                </div>
            </div>

            <div className="noteTextInputDiv">
                <span className="noteSpan">Notes</span>
                <input className="noteTextClass" type="text"
                        onChange={noteTextChangeHandler} value={editFormData.noteTextVal}></input>
            </div>

            <div className="editNoteButtonDiv">
                <button className="editNoteButton" onClick={editNoteClickHandler}>Edit Note</button>
            </div>

        </div>
    )
}

export default Main