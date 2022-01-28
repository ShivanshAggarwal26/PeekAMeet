import SignIn from "../pages/SignIn"
import { Redirect } from "react-router"

const SPRoute = (props) => {
    if (localStorage.getItem("token")) {
        return <Redirect to="/user-details" />
    }
    return <SignIn />
    // return <Redirect to="/sign-in" />
}

export default SPRoute