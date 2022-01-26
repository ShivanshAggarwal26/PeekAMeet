import "./Main.css";
import MainContext from "../../context/MainContext";
import { useContext, useEffect, useRef, useCallback } from "react";
import response from "../../files/response";
import userIcon from "../../assets/images/userIcon/userIcon.webp";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router";
import { getNoteData } from "../../store/notes-actions";
import NotesCard from "../../components/NotesCard";
import { MainSliceActions } from "../../store/MainSlice";

const Main = () => {
    // const ctx = useContext(MainContext);
    // const response = ctx.response;
    const data = response.data[0].customer;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const userName = firstName + " " + lastName;
    const jobTitle = data.jobTitle;
    const company = data.company;

    const dispatch = useDispatch()

    const history = useHistory();

    const loadingNotes = useSelector((state) => {
        return state.mainState.loadingNotes;
    })

    const pageVal = useSelector((state) => {
        return state.mainState.pageVal
    })
    
    const addNotesClickHandler = () => {
        history.replace("/add-notes")
    }

    const notesListOne = useSelector((state) => {
        return state.notes.notesListOne
    })

    const observer = useRef()
    const lastNoteCard = useCallback(node => {
        if (loadingNotes) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                dispatch(MainSliceActions.setPageVal())
            }
        })
        if (node) observer.current.observe(node)
    }, [loadingNotes, dispatch])

    useEffect(() => {
        dispatch(getNoteData(pageVal))
    }, [dispatch, pageVal])

    console.log(notesListOne.length)

    let i = 0
    const notesCardList = notesListOne.map((note) => {
        i += 1
        if (i === notesListOne.length) {
            return (
            <div ref={lastNoteCard} key={note.noteKey}>
                <NotesCard note={note} key={note.noteKey}/>
            </div>
                )
        } else {
            return (
            <div key={note.noteKey}>
                <NotesCard note={note} key={note.noteKey}/>
            </div>
            )
        }
    })

    return (
        <div className="main-notes">

            <div className="userCard">
                <div className="Bitmap">
                    <img src={userIcon} alt="" className="userImage"></img>
                </div>

                <div className="userInfoClass">
                    <span className="mainInfoClass">{userName}</span>
                    <span className="mainInfoClass">{jobTitle}</span>
                    <span className="mainInfoClass">{company}</span>
                </div>

                <div>
                    <div className="userCardButton">
                        <span className="Share">
                            Share
                        </span>
                    </div>
                    <div className="userCardButton">
                        <span className="Edit-Profile">
                            Edit Profile
                        </span>
                    </div>
                </div>            
            </div>

            <div className="addNoteDivClass">
                <span onClick={addNotesClickHandler}>Add Notes</span>
            </div>

            <div className="notesCardList">
                {notesCardList}
                {loadingNotes && <p>Loading...</p>}
            </div>

        </div>
    )
}

export default Main