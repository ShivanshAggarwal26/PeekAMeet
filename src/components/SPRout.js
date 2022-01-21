import SignIn from "../pages/SignIn"
import { Redirect } from "react-router"

const SPRoute = () => {
    if (localStorage.getItem("token")) {
        return <Redirect to="/user-details" />
    }
    return <SignIn />
}

export default SPRoute