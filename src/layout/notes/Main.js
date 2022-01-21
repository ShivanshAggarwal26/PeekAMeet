import "./Main.css";
import MainContext from "../../context/MainContext";
import { useContext } from "react";
import response from "../../files/response";
import userIcon from "../../assets/images/userIcon/userIcon.webp";
import GetNotesData from "../../views/GetNotesData";
import NextButton from "../../components/NextButton";
import { useSelector } from "react-redux";

const Main = () => {
    // const ctx = useContext(MainContext);
    // const response = ctx.response;
    const data = response.data[0].customer;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const userName = firstName + " " + lastName;
    const jobTitle = data.jobTitle;
    const company = data.company;

    const loadingNotes = useSelector((state) => {
        return state.mainState.loadingNotes;
    })

    const notesData = <GetNotesData />

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

            <div className="notesCardList">
                {notesData}
                <NextButton />
                {loadingNotes && <p>Loading...</p>}
            </div>

        </div>
    )
}

export default Main