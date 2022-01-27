import "./Main.css";
import MainContext from "../../context/MainContext";
import { useContext, useState } from "react";
import response from "../../files/response";
import { useDispatch } from "react-redux";
import { addNoteData } from "../../store/notes-actions";
import {useHistory} from "react-router-dom"

const Main = () => {
    // const ctx = useContext(MainContext);
    // const response = ctx.response;
    const data = response.data[0].customer;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const userName = firstName + " " + lastName;

    const [addFormData, setAddFormData] = useState({
        dateVal: "",
        timeVal: "",
        noteTextVal: ""
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const addNoteClickHandler = () => {
        const dateTime = addFormData.dateVal + "T" + addFormData.timeVal + ".202Z"

        const obj = {
            "createdFor": "5de9d89c64b57f3acc326725",
            "noteText": addFormData.noteTextVal,
            "type": "followup",
            "createdBy": "5de9d89c64b57f3acc326724",
            "createdAt": dateTime,
            "updatedAt": "2019-12-16T10:17:23.717Z",
            // "id": "5df7542a38ebb518325d87e7"
        }

        dispatch(addNoteData(obj))

        setAddFormData({
            dateVal: "",
            timeVal: "",
            noteTextVal: ""
        })

        history.replace("/notes")
    }

    const dateChangeHandler = (event) => {
        setAddFormData({
            ...addFormData,
            dateVal: event.target.value
        })
    }

    const timeChangeHandler = (event) => {
        setAddFormData({
            ...addFormData,
            timeVal: event.target.value
        })
    }

    const noteTextChangeHandler = (event) => {
        setAddFormData({
            ...addFormData,
            noteTextVal: event.target.value
        })
    }

    return (
        <div className="main-add-notes">

            <div className="addNoteHeaderDiv">
                <span className="Add-Note">
                    Add Note
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
                            onChange={dateChangeHandler} value={addFormData.dateVal}></input>
                </div>

                <div className="timeInputDiv">
                    <span className="time">
                        Time
                    </span>
                    <input className="timeInputClass" type="time" step="1"
                            onChange={timeChangeHandler} value={addFormData.timeVal}></input>
                </div>
            </div>

            <div className="noteTextInputDiv">
                <span className="noteSpan">Notes</span>
                {/* <input className="noteTextClass" type="text" 
                        onChange={noteTextChangeHandler} value={addFormData.noteTextVal}></input> */}
                <textarea className="noteTextClass" type="text"
                        onChange={noteTextChangeHandler} value={addFormData.noteTextVal}></textarea>
            </div>

            <div className="addNoteButtonDiv">
                <button className="addNoteButton" onClick={addNoteClickHandler}>Add Note</button>
            </div>

        </div>
    )
}

export default Main 