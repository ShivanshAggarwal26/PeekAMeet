import {Redirect} from "react-router-dom";

const SignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    return (
        <Redirect to="/" />
    )
}

export default SignOut