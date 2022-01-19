import {Redirect} from "react-router-dom";

const SignOut = () => {
    localStorage.removeItem("token");
    console.log("Hello")
    return (
        <Redirect to="/" />
    )
}

export default SignOut