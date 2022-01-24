import notesResponse from "../files/notesResponse";
import NotesCard from "../components/NotesCard";
import { useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { MainSliceActions } from "../store/MainSlice";
import { notesDataActions } from "../store/notes-data-slice";
import { useDispatch } from "react-redux";

const GetNotesData = () => {

    // const notesList = [];
    // const docs = notesResponse.data[0].docs;

    const page = useSelector((state) => {
        return state.mainState.pageVal;
    })

    // const notesDataList = useSelector((state) => {
    //     return state.notes.notesDataList;
    // })

    const notesListOne = useSelector((state) => {
        return state.notes.notesListOne
    })

    const [notesCardListData, setNotesCardListData] = useState([])

    // const [notesDataList, setNotesDataList] = useState([])
    const dispatch = useDispatch()

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

    const getNotes = useCallback (async (page = 5) => {
        dispatch(MainSliceActions.setLoadingNotes(true))
        try {
            const response = await axios.get("https://react-project-36c23-default-rtdb.firebaseio.com/newNotes/-Mu5esZk2wo2opRG72Vo/data/0/docs.json")

            // const data = response.data
            // let docs
            // for (const key in data) {
            //     docs = data[key].data[0].docs
            // }

            const docs = response.data;
            console.log(docs)

            const notesList = []

            // for (let i = 0; i < page && i < docs.length; i++) {
            //     const dateTime = docs[i].createdAt;
            //     const notesDateTime = convertDateTime(dateTime)
            //     notesList.push({
            //         noteText: docs[i].noteText,
            //         notesDateTime: notesDateTime
            //     })
            // }

            let j = 0
            for (let i in docs) {
                if (j < page) {
                    const dateTime = docs[i].createdAt;
                    const notesDateTime = convertDateTime(dateTime)
                    notesList.push({
                        noteText: docs[i].noteText,
                        notesDateTime: notesDateTime,
                        noteKey: i
                    })
                }
                j += 1
            }

            dispatch(notesDataActions.setNotesListOne(notesList))
            
            const notesCardList = notesList.map((note) => {
                return <NotesCard note={note} key={note.noteKey}/>
            })
            
            // dispatch(notesDataActions.setNotesDataList(notesCardList))
            setNotesCardListData(notesCardList)
            // console.log(notesCardList)
            // setNotesDataList(notesCardList)

            // return notesCardList

        } catch (error) {
            console.log(error)
        }
        dispatch(MainSliceActions.setLoadingNotes(false))
    }, [dispatch])

    useEffect(() => {
        getNotes(page)
    }, [page, getNotes])


    // return notesDataList
    // return notesList
    return notesCardListData
    // return notesListOne
}

export default GetNotesData