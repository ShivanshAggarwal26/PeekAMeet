import { useSelector } from "react-redux"

const GetSingleNote = () => {
    const notesData = useSelector((state) => {
        return state.notes.notesData;
    })
    console.log(notesData)
    return (
        {notesData}
    )
}

export default GetSingleNote