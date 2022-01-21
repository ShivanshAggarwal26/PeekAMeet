import UserDetails from "../pages/UserDetails";
import {Redirect} from "react-router-dom";
import SignIn from "../pages/SignIn";

const PRoute = (props) => {
    if (localStorage.getItem("token")) {
        console.log("Success")
        const comp = props.pageName
        return comp
    }
    return (
        <Redirect to="/" />
        // <SignIn />
    )
}

export default PRoute