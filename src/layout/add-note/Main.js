import "./Main.css";
import { useState } from "react";
import response from "../../files/response";
import { useDispatch } from "react-redux";
import { addNoteData } from "../../store/notes-actions";
import {useHistory} from "react-router-dom";

const Main = () => {
    const data = response.data[0].customer;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const userName = firstName + " " + lastName;

    const [addFormData, setAddFormData] = useState({
        dateVal: "",
        timeVal: "",
        noteTextVal: ""
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const addNoteClickHandler = () => {
        const dateTime = addFormData.dateVal + "T" + addFormData.timeVal + ".202Z";

        const obj = {
            "createdFor": "5de9d89c64b57f3acc326725",
            "noteText": addFormData.noteTextVal,
            "type": "followup",
            "createdBy": "5de9d89c64b57f3acc326724",
            "createdAt": dateTime,
            "updatedAt": dateTime
        };

        dispatch(addNoteData(obj));

        setAddFormData({
            dateVal: "",
            timeVal: "",
            noteTextVal: ""
        });

        history.replace("/notes");
    }

    const dateChangeHandler = (event) => {
        setAddFormData({
            ...addFormData,
            dateVal: event.target.value
        });
    }

    const timeChangeHandler = (event) => {
        setAddFormData({
            ...addFormData,
            timeVal: event.target.value
        });
    }

    const noteTextChangeHandler = (event) => {
        setAddFormData({
            ...addFormData,
            noteTextVal: event.target.value
        });
    }

    const cancelAddNoteClickHandler = () => {
        history.replace("/notes");
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
                <textarea className="noteTextClass" type="text"
                        onChange={noteTextChangeHandler} value={addFormData.noteTextVal}></textarea>
            </div>

            <div className="addNoteButtonDiv">
                <button className="addNoteButton" onClick={addNoteClickHandler}>Add Note</button>
                <button className="cancelAddButton" onClick={cancelAddNoteClickHandler}>Cancel</button>
            </div>

        </div>
    )
}

export default Main 