import "./NotesCard.css"

const NotesCard = (props) => {
    const notesCard = props.note
    const noteText = notesCard.noteText
    const noteDate = notesCard.notesDateTime.notesDate
    const noteTime = notesCard.notesDateTime.notesTime + ", "
    
    return (
        <div className="notesCard">
            <span className="notesData">{noteText}</span>
            <div className="notesDateTime">
                <span>{noteTime}</span>
                <span>{noteDate}</span>
            </div>
        </div>
    )
}

export default NotesCard