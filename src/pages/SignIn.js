import LoadingOverlay from "react-loading-overlay";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";;

const SignIn = () => {
    const ctx = useContext(MainContext);
    const loading = ctx.loading;
    return (
        <div className="rectangle">
            <LoadingOverlay active={loading} spinner text="Loading...">
                <Header />
                <Main />
                <Footer />
            </LoadingOverlay>
        </div>
    )
}

export default SignIn