import notesResponse from "../files/notesResponse";
import NotesCard from "../components/NotesCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { MainSliceActions } from "../store/MainSlice";
import { useDispatch } from "react-redux";

const GetNotesData = () => {

    // const notesList = [];
    // const docs = notesResponse.data[0].docs;

    const page = useSelector((state) => {
        return state.mainState.pageVal;
    })

    const [notesDataList, setNotesDataList] = useState([])
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

    const getNotes = async (page = 5) => {
        dispatch(MainSliceActions.setLoadingNotes(true))
        try {
            const response = await axios.get("https://react-http-4d12b-default-rtdb.firebaseio.com/notes.json");

            const data = response.data
            let docs
            for (const key in data) {
                docs = data[key].data[0].docs
            }

            const notesList = []

            for (let i = 0; i < page && i < docs.length; i++) {
                const dateTime = docs[i].createdAt;
                const notesDateTime = convertDateTime(dateTime);
                notesList.push({
                    noteText: docs[i].noteText,
                    notesDateTime: notesDateTime
                })
            }

            let i = -1
            const notesCardList = notesList.map((note) => {
                i += 1
                return <NotesCard note={note} key={i} />
            })

            setNotesDataList(notesCardList);

        } catch (error) {
            console.log(error)
        }
        dispatch(MainSliceActions.setLoadingNotes(false))
    }

    useEffect(() => {
        getNotes(page)
    }, [page])


    return notesDataList
}

export default GetNotesData