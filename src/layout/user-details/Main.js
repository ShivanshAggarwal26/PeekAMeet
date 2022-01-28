import "./Main.css";
import MainContext from "../../context/MainContext";
import { useContext, useEffect } from "react";
import response from "../../files/response";
import userIcon from "../../assets/images/userIcon/userIcon.webp";
import mailIcon from "../../assets/images/information-icons/mail-icon.png";
import websiteIcon from "../../assets/images/information-icons/website-icon.png";
import callIcon from "../../assets/images/information-icons/call-icon.png";
import MainRectangle from "../../components/MainRectangle";
import classes from "../../components/MainRectangle.module.css";
import axios from "axios";

const Main = () => {

    const ctx = useContext(MainContext);
        
    const getResponse = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const url = "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/user/nearby/" + userId;
            await axios.get(url);
        } catch (error) {
            ctx.updateResponse(response);
        }
    }

    useEffect(() => {
        getResponse();
    }, []);

    const data = response.data[0].customer;

    const tagline = data.tagline;
    const bio = data.bio;
    const industry = data.industry;
    const industryTag = industry.map((val) => {
        return (
            <MainRectangle inputData={val}
                divClassValue={classes.industryDiv}
                spanClassValue={classes.industrySpan}
                key={val} />
        )
    })
    const organisationGroups = data.organisationGroups;
    const ogTag = organisationGroups.map((val) => {
        return (
            <MainRectangle inputData={val}
                divClassValue={classes.organizationGroupDiv}
                spanClassValue={classes.organizationGroupSpan}
                key={val} />
        )
    })
    const interestActivities = data.interestActivities;
    const iaTag = interestActivities.map((val) => {
        return (
            <MainRectangle inputData={val}
                divClassValue={classes.interestActivityDiv}
                spanClassValue={classes.interestActivitySpan}
                key={val} />
        )
    })
    const alumni = data.alumni;
    const alumniTag = alumni.map((val) => {
        return (
            <MainRectangle inputData={val}
                divClassValue={classes.alumniDiv}
                spanClassValue={classes.alumniSpan}
                key={val} />
        )
    })
    const languages = data.languages;
    const languagesTag = languages.map((val) => {
        return (
            <MainRectangle inputData={val}
                divClassValue={classes.languageDiv}
                spanClassValue={classes.languageSpan}
                key={val} />
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

            <div className="tagLineClass">
                <span>{tagline}</span>
            </div>

            <div className="biographyClass">
                <span>{bio}</span>
            </div>

            <div id="user-details-card-id">
                <span className="Industrys">
                    Industry(s)
                </span>
                {industryTag}
            </div>

            <div id="user-details-card-id">
                <span className="Organizations-and-Groups">
                    Organizations and Groups
                </span>
                {ogTag}
            </div>

            <div id="user-details-card-id">
                <span className="Interests-and-Activi">
                    Interests and Activities
                </span>
                {iaTag}
            </div>

            <div id="user-details-card-id">
                <span className="Alumni">
                    Alumni
                </span>
                {alumniTag}
            </div>

            <div id="user-details-card-id">
                <span className="Languages">
                    Languages
                </span>
                {languagesTag}
            </div>

            <div className="userInformationDiv">
                <div id="userInformationId">
                    <img src={mailIcon} alt=""></img>
                    <span className="infoClass">
                        {userEmail}
                    </span>
                </div>
                <div id="userInformationId">
                    <img src={websiteIcon} alt=""></img>
                    <span className="infoClass">
                        {website}
                    </span>
                </div>
                <div id="userInformationId">
                    <img src={callIcon} alt=""></img>
                    <span className="infoClass">
                        {userPhone}
                    </span>
                </div>
            </div>

            <div className="businessAddressClass">
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