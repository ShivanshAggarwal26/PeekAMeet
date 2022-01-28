import {Redirect} from "react-router-dom";

const PRoute = (props) => {
    if (localStorage.getItem("token")) {
        const comp = props.pageName;
        return comp
    }
    return (
        <Redirect to="/sign-in" />
    )
}

export default PRoute