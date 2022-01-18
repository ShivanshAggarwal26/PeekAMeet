import SignInContext from "./SignInContext";
import { useState } from "react";

const SignInState = (props) => {
    const initialInput = {
        Email: "",
        Password: ""
    };

    const [formData, setFormData] = useState(initialInput);

    const updateFormData = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <SignInContext.Provider value={{
                formData: formData,
                updateFormData: updateFormData
            }}>
            {props.children}
        </SignInContext.Provider>
    )
}

export default SignInState;