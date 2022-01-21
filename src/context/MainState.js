import MainContext from "./MainContext.js";
import { useState } from "react";

const MainState = (props) => {
    const initialInput = {
        Email: "",
        Password: ""
    };

    const [formData, setFormData] = useState(initialInput);
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);

    const updateFormData = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const updateResponse = (val) => {
        setResponse(val);
    }

    const updateLoading = (val) => {
        setLoading(val);
    }

    return (
        <MainContext.Provider value={{
                formData: formData,
                updateFormData: updateFormData,
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