import "./Main.css";
import Group18 from "../assets/images/group-18.png";
import SignInForm from "./SignInForm";

const Main = () => {

    return (
        <div className="Mask">
            <div className="mainLeftDiv">
                <img src={Group18} className="Group-18" alt=""></img>
            </div>
            <div className="mainRightDiv">
                <span className="PEEKaMEET-lets-you-n">
                    <span className="text-style-1">
                        {"PEEKaMEET"}
                    </span>
                    {" lets you network more effectively to achieve your business and career goals"}
                </span>
                <div className="rectangleTags">
                    <div className="freelancerRectangle">
                        <span className="Freelancer">
                            Freelancer
                        </span>
                    </div>
                    <div className="jobSeekerRectangle">
                        <span className="Job-Seeker">
                            Job Seeker
                        </span>
                    </div>
                    <div className="enterpreneurRectangle">
                        <span className="Enterpreneur">
                            Enterpreneur
                        </span>
                    </div>
                    <div className="mompreneurRectangle">
                        <span className="Mompreneur">
                            Mompreneur
                        </span>
                    </div>
                </div>
                <div className="rectangleTags">
                    <div className="internshipSeekerRectangle"></div>
                    <div className="environmentalChangeRectangle"></div>
                </div>
                <span className="Build-and-manage-you">
                    {"Build and manage your network with PEEKaMEET"}
                </span>
                <SignInForm />
            </div>
        </div>
    )
}

export default Main