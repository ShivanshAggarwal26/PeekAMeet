import UserDetails from "../pages/UserDetails";
import {Redirect} from "react-router-dom";
import SignIn from "../pages/SignIn";

const PRoute = (props) => {
    if (localStorage.getItem("token")) {
        const comp = props.pageName
        return comp
    }
    return (
        // <Redirect to="/" />
        <Redirect to="/sign-in" />
        // <SignIn />
    )
}

export default PRoute