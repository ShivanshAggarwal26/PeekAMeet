import Header from "../layout/Header"
import Main from "../layout/edit-note/Main"
import Footer from "../layout/Footer"
import {useParams} from "react-router-dom"

const EditNote = () => {
    const params = useParams()
    const noteKey = params.noteKey

    return (
        <div className="rectangle-user-details">
            <Header />
            <Main noteKey={noteKey}/>
            <Footer />
        </div>
    )
}

export default EditNote