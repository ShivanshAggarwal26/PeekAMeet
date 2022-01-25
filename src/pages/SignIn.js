import LoadingOverlay from "react-loading-overlay";
import MainContext from "../context/MainContext";
import { useContext } from "react";
import Header from "../layout/sign-in/Header";
import Main from "../layout/sign-in/Main";
import Footer from "../layout/Footer";
import PropTypes from "prop-types"

const SignIn = () => {
    const ctx = useContext(MainContext);
    const loading = ctx.loading;
    LoadingOverlay.propTypes = {
        highlighted: PropTypes.bool
    }
    return (
        <LoadingOverlay active={loading} spinner text="Loading..." className="_loading_overlay_wrapper">
            <div className="rectangle">
                <Header />
                <Main />
                <Footer />
            </div>
        </LoadingOverlay>
    )
}

export default SignIn