import MainContext from "./MainContext.js";
import { useState } from "react";

const MainState = (props) => {

    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);

    const updateResponse = (val) => {
        setResponse(val);
    }

    const updateLoading = (val) => {
        setLoading(val);
    }

    return (
        <MainContext.Provider value={{
                response: response,
                updateResponse: updateResponse,
                loading: loading,
                updateLoading: updateLoading
            }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState