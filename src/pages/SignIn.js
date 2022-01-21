import LoadingOverlay from "react-loading-overlay";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Header from "../layout/sign-in/Header";
import Main from "../layout/sign-in/Main";
import Footer from "../layout/Footer";

const SignIn = () => {
    const ctx = useContext(MainContext);
    const loading = ctx.loading;
    return (
        <LoadingOverlay active={loading} spinner text="Loading...">
            <div className="rectangle">
                <Header />
                <Main />
                <Footer />
            </div>
        </LoadingOverlay>
    )
}

export default SignIn