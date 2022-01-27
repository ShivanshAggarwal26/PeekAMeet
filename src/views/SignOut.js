import {Redirect} from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { MainSliceActions } from "../store/MainSlice";

const SignOut = () => {
    // const dispatch = useDispatch();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    // dispatch(MainSliceActions.setLogin(false));
    return (
        <Redirect to="/" />
    )
}

export default SignOut