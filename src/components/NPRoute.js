import {Redirect} from "react-router-dom"

const NPRoute = () => {
    if (localStorage.getItem("token")) {
        return <Redirect to="/user-details" />
    }
    return <Redirect to="/sign-in" />
}

export default NPRoute;