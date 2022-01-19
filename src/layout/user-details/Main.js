import "./Main.css";
import MainContext from "../../context/MainContext";
import { useContext } from "react";
import RectangleButton from "../../components/RectangleButton";
import response from "../../files/response";
import userIcon from "../../assets/images/userIcon/userIcon.webp";

const Main = () => {
    // const ctx = useContext(MainContext);
    // const response = ctx.response;
    const data = response.data[0].customer;
    const tagline = data.tagline;
    const bio = data.bio;
    const industry = data.industry;
    const industryTag = industry.map((val) => {
        return (
            <RectangleButton tagValue={val} />
        )
    })
    const organisationGroups = data.organisationGroups;
    const ogTag = organisationGroups.map((val) => {
        return (
            <RectangleButton tagValue={val} />
        )
    })
    const interestActivities = data.interestActivities;
    const iaTag = interestActivities.map((val) => {
        return (
            <RectangleButton tagValue={val} />
        )
    })
    const alumni = data.alumni;
    const alumniTag = alumni.map((val) => {
        return (
            <RectangleButton tagValue={val} />
        )
    })
    const languages = data.languages;
    const languagesTag = languages.map((val) => {
        return (
            <RectangleButton tagValue={val} />
        )
    })
    const userEmail = data.email;
    const website = data.website;
    const userPhone = data.businessPhone;
    const businessAddress = data.businessAddress;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const userName = firstName + " " + lastName;
    const jobTitle = data.jobTitle;
    const company = data.company;

    return (
        <div className="main-user-details">
            
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
                        <span class="Share">
                            Share
                        </span>
                    </div>
                    <div className="userCardButton">
                        <span class="Edit-Profile">
                            Edit Profile
                        </span>
                    </div>
                </div>            
            </div>

            <div>
                <span>{tagline}</span>
            </div>
            
            <div>
                <span>{bio}</span>
            </div>
            
            <div>
                <span className="Industrys">
                    Industry(s)
                </span>
                {industryTag}
            </div>
            
            <div>
                <span className="Organizations-and-Groups">
                    Organizations and Groups
                </span>
                {ogTag}
            </div>
            
            <div>
                <span className="Interests-and-Activi">
                    Interests and Activities
                </span>
                {iaTag}
            </div>
            
            <div>
                <span className="Alumni">
                    Alumni
                </span>
                {alumniTag}
            </div>

            <div>
                <span className="Languages">
                    Languages
                </span>
                {languagesTag}
            </div>

            <div>
                <div>
                    <span className="infoClass">
                        {userEmail}
                    </span>
                </div>
                <div>
                    <span className="infoClass">
                        {website}
                    </span>
                </div>
                <div>
                    <span className="infoClass">
                        {userPhone}
                    </span>
                </div>
            </div>

            <div>
                <span className="Business-Address">
                    Business Address
                </span>
                <span className="addressClass">
                    {businessAddress}
                </span>
            </div>

        </div>
    )
}

export default Main