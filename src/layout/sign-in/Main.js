import "./Main.css";
import Group18 from "../../assets/images/group-18.png";
import SignInForm from "./SignInForm";
import MainRectangle from "../../components/MainRectangle";
import classes from "../../components/MainRectangle.module.css";

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
                    {/* <div className="freelancerRectangle">
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
                    </div> */}

                    <MainRectangle inputData={"Freelancer"} 
                                    divClassValue={classes.freelancerDiv} 
                                    spanClassValue={classes.freelancerSpan}/>
                    <MainRectangle inputData={"Job Seeker"} 
                                    divClassValue={classes.jobSeekerDiv} 
                                    spanClassValue={classes.jobSeekerSpan}/>
                    <MainRectangle inputData={"Enterpreneur"} 
                                    divClassValue={classes.enterpreneurDiv} 
                                    spanClassValue={classes.enterpreneurSpan}/>
                    <MainRectangle inputData={"Mompreneur"} 
                                    divClassValue={classes.mompreneurDiv} 
                                    spanClassValue={classes.mompreneurSpan}/>
                </div>
                <div className="rectangleTags">
                    {/* <div className="internshipSeekerRectangle"></div>
                    <div className="environmentalChangeRectangle"></div> */}
                    <MainRectangle inputData={"Internship Seeker"} 
                                    divClassValue={classes.internshipSeekerDiv} 
                                    spanClassValue={classes.internshipSeekerSpan}/>
                    <MainRectangle inputData={"Environmental Change Maker"} 
                                    divClassValue={classes.environmentalChangeMakerDiv} 
                                    spanClassValue={classes.environmentalChangeMakerSpan}/>
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