import {Redirect} from "react-router-dom";
import { useDispatch } from "react-redux";
import { MainSliceActions } from "../store/MainSlice";

const SignOut = () => {
    const dispatch = useDispatch();
    localStorage.removeItem("token");
    dispatch(MainSliceActions.setLogin(false));
    console.log("Hello")
    return (
        <Redirect to="/" />
    )
}

export default SignOut